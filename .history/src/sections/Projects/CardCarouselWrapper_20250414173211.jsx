import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import fitlift from "../../assets/fitlift.png";
import Synthesis from "../../assets/hipsster.png";

// 🧠 Drag logic base class
class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }

  event(callback) {
    let handler;

    this.target.addEventListener("mousedown", (e) => {
      e.preventDefault();
      handler = callback(e);
      window.addEventListener("mousemove", handler);
      window.addEventListener("mouseup", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler);
        window.removeEventListener("mouseup", clearDraggingEvent);
        handler(null);
      }
    });

    this.target.addEventListener("touchstart", (e) => {
      handler = callback(e);
      window.addEventListener("touchmove", handler);
      window.addEventListener("touchend", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler);
        window.removeEventListener("touchend", clearDraggingEvent);
        handler(null);
      }
    });
  }

  getDistance(callback) {
    const distanceInit = (e1) => {
      const startX = "touches" in e1 ? e1.touches[0].clientX : e1.clientX;
      const startY = "touches" in e1 ? e1.touches[0].clientY : e1.clientY;

      return function (e2) {
        if (!e2) return callback(null);
        const currentX = "touches" in e2 ? e2.touches[0].clientX : e2.clientX;
        const currentY = "touches" in e2 ? e2.touches[0].clientY : e2.clientY;
        callback({ x: currentX - startX, y: currentY - startY });
      };
    };

    this.event(distanceInit);
  }
}

// 🎠 Carousel that extends dragging
class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container);
    this.container = container;
    this.controllerElement = controller;
    this.cards = container.querySelectorAll(`.${styles.card}`);

    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth =
      (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;

    this.xScale = {};
    this.build();
    super.getDistance(this.moveCards.bind(this));
  }

  build() {
    this.cards.forEach((card, i) => {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const zIndex = -Math.abs(i - this.centerIndex);
      const leftPos = this.calcPos(x, scale2);

      this.xScale[x] = card;

      this.updateCards(card, {
        x,
        scale,
        leftPos,
        zIndex,
      });
    });
  }

  updateCards(card, { x, scale, leftPos, zIndex }) {
    card.setAttribute("data-x", x);
    card.style.transform = `scale(${scale})`;
    card.style.opacity = scale === 0 ? 0 : 1;
    card.style.left = `${leftPos}%`;
    card.style.zIndex = zIndex;

    if (zIndex === 0) {
      card.classList.add("highlight");
    } else {
      card.classList.remove("highlight");
    }
  }

  calcScale(x) {
    const formula = 1 - 1 / 5 * Math.pow(x, 2);
    return formula <= 0 ? 0 : formula;
  }

  calcScale2(x) {
    return x <= 0 ? 1 + x / 5 : 1 - x / 5;
  }

  calcPos(x, scale) {
    return x < 0
      ? (scale * 100 - this.cardWidth) / 2
      : 100 - (scale * 100 + this.cardWidth) / 2;
  }

  checkOrdering(card, x, xDist) {
    const original = parseInt(card.dataset.x);
    const rounded = Math.round(xDist);
    let newX = x;

    if (x !== x + rounded) {
      if (x + rounded > original && x + rounded > this.centerIndex) {
        newX =
          x + rounded - 1 - this.centerIndex - rounded + -this.centerIndex;
      } else if (
        x + rounded < original &&
        x + rounded < -this.centerIndex
      ) {
        newX =
          x + rounded + 1 + this.centerIndex - rounded + this.centerIndex;
      }

      this.xScale[newX + rounded] = card;
    }

    const temp = -Math.abs(newX + rounded);
    this.updateCards(card, { zIndex: temp });

    return newX;
  }

  moveCards(data) {
    const xDist = data ? data.x / 250 : 0;
    this.container.classList.toggle("smooth-return", !data);

    Object.keys(this.xScale).forEach((x) => {
      if (!data) {
        this.updateCards(this.xScale[x], {
          x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex),
        });
      }
    });

    this.cards.forEach((card) => {
      const x = this.checkOrdering(card, parseInt(card.dataset.x), xDist);
      const scale = this.calcScale(x + xDist);
      const scale2 = this.calcScale2(x + xDist);
      const leftPos = this.calcPos(x + xDist, scale2);
      this.updateCards(card, { scale, leftPos });
    });
  }
}

function CardCarouselWrapper() {
  const cardsContainerRef = useRef(null);
  const cardsControllerRef = useRef(null);
  const carouselRef = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      if (cardsContainerRef.current) {
        new CardCarousel(cardsContainerRef.current, cardsControllerRef.current);
      }
    }, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card-carousel} ref={cardsContainerRef}>
        <div className={styles.card}>
          <ProjectCard
            src={viberr}
            link="https://github.com/"
            h3="viberr"
            p="Streaming App"
          />
        </div>
        <div className={styles.card}>
          <ProjectCard
            src={freshburger}
            link="https://github.com/"
            h3="freshburger"
            p="Burger App"
          />
        </div>
        <div className={styles.card}>
          <ProjectCard
            src={fitlift}
            link="https://github.com/"
            h3="fitlift"
            p="Fitness App"
          />
        </div>
        <div className={styles.card}>
          <ProjectCard
            src={Synthesis}
            link="https://github.com/"
            h3="Synthesis"
            p="Synthesis App"
          />
        </div>
      </div>
      <div
        className={styles.cardController}
        ref={cardsControllerRef}
        tabIndex={0}
        role="region"
        aria-label="Carousel Controller"
      />
    </div>
  );
}

export default CardCarouselWrapper;
