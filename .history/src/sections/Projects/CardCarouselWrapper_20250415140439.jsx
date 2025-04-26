import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import fitlift from "../../assets/fitlift.png";
import Synthesis from "../../assets/hipsster.png";

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }

  event(callback) {
    let handler;

    this.target.addEventListener("mousedown", e => {
      e.preventDefault();
      handler = callback(e);
      window.addEventListener("mousemove", handler);
      document.addEventListener("mouseleave", clearDraggingEvent);
      window.addEventListener("mouseup", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler);
        window.removeEventListener("mouseup", clearDraggingEvent);
        document.removeEventListener("mouseleave", clearDraggingEvent);
        handler(null);
      }
    });

    this.target.addEventListener("touchstart", e => {
      handler = callback(e);
      window.addEventListener("touchmove", handler);
      window.addEventListener("touchend", clearDraggingEvent);
      document.body.addEventListener("mouseleave", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler);
        window.removeEventListener("touchend", clearDraggingEvent);
        handler(null);
      }
    });
  }

  getDistance(callback) {
    function distanceInit(e1) {
      let startingX, startingY;

      if ("touches" in e1) {
        startingX = e1.touches[0].clientX;
        startingY = e1.touches[0].clientY;
      } else {
        startingX = e1.clientX;
        startingY = e1.clientY;
      }

      return function (e2) {
        if (e2 === null) return callback(null);

        if ("touches" in e2) {
          return callback({
            x: e2.touches[0].clientX - startingX,
            y: e2.touches[0].clientY - startingY
          });
        } else {
          return callback({
            x: e2.clientX - startingX,
            y: e2.clientY - startingY
          });
        }
      };
    }

    this.event(distanceInit);
  }
}

class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container);
    this.container = container;
    this.controllerElement = controller;
    this.cards = [...container.children];
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100;
    this.xScale = {};

    window.addEventListener("resize", this.updateCardWidth.bind(this));

    if (this.controllerElement) {
      this.controllerElement.addEventListener("keydown", this.controller.bind(this));
    }

    this.build();
    super.getDistance(this.moveCards.bind(this));
  }

  updateCardWidth() {
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100;
    this.build();
  }

  build(fix = 0) {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const zIndex = -(Math.abs(i - this.centerIndex));
      const leftPos = this.calcPos(x, scale2);

      this.xScale[x] = this.cards[i];

      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      });
    }
  }

  controller(e) {
    const temp = { ...this.xScale };

    if (e.keyCode === 39) {
      for (let x in this.xScale) {
        const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;
        temp[newX] = this.xScale[x];
      }
    }

    if (e.keyCode === 37) {
      for (let x in this.xScale) {
        const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;
        temp[newX] = this.xScale[x];
      }
    }

    this.xScale = temp;

    for (let x in temp) {
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const leftPos = this.calcPos(x, scale2);
      const zIndex = -Math.abs(x);

      this.updateCards(this.xScale[x], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      });
    }
  }

  calcPos(x, scale) {
    if (x < 0) return (scale * 100 - this.cardWidth) / 2;
    return 100 - (scale * 100 + this.cardWidth) / 2;
  }

  updateCards(card, data) {
    if (data.x !== undefined) card.setAttribute("data-x", data.x);
    if (data.scale !== undefined) {
      card.style.transform = `scale(${data.scale})`;
      card.style.opacity = data.scale === 0 ? 0 : 1;
    }
    if (data.leftPos !== undefined) card.style.left = `${data.leftPos}%`;
    if (data.zIndex !== undefined) {
      data.zIndex === 0 ? card.classList.add("highlight") : card.classList.remove("highlight");
      card.style.zIndex = data.zIndex;
    }
  }

  calcScale2(x) {
    return x <= 0 ? 1 - -1 / 5 * x : 1 - 1 / 5 * x;
  }

  calcScale(x) {
    const formula = 1 - 1 / 5 * Math.pow(x, 2);
    return formula <= 0 ? 0 : formula;
  }

  checkOrdering(card, x, xDist) {
    const original = parseInt(card.dataset.x);
    const rounded = Math.round(xDist);
    let newX = x;

    if (x !== x + rounded) {
      if (x + rounded > original && x + rounded > this.centerIndex) {
        newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex;
      } else if (x + rounded < original && x + rounded < -this.centerIndex) {
        newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex;
      }
      this.xScale[newX + rounded] = card;
    }

    const temp = -Math.abs(newX + rounded);
    this.updateCards(card, { zIndex: temp });

    return newX;
  }

  moveCards(data) {
    let xDist = 0;

    if (data != null) {
      this.container.classList.remove("smooth-return");
      xDist = data.x / 250;
    } else {
      this.container.classList.add("smooth-return");
      for (let x in this.xScale) {
        this.updateCards(this.xScale[x], {
          x: x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex)
        });
      }
    }

    for (let i = 0; i < this.cards.length; i++) {
      const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist);
      const scale = this.calcScale(x + xDist);
      const scale2 = this.calcScale2(x + xDist);
      const leftPos = this.calcPos(x + xDist, scale2);
      this.updateCards(this.cards[i], {
        scale: scale,
        leftPos: leftPos
      });
    }
  }
}

const CardCarouselWrapper = () => {
  const cardsContainerRef = useRef(null);
  const cardsControllerRef = useRef(null);

  useEffect(() => {
    if (cardsContainerRef.current && cardsControllerRef.current) {
      new CardCarousel(cardsContainerRef.current, cardsControllerRef.current);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardCarousel} ref={cardsContainerRef}>
        <div className={styles.card}>
          <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App" />
        </div>
        <div className={styles.card}>
          <ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App" />
        </div>
        <div className={styles.card}>
          <ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App" />
        </div>
        <div className={styles.card}>
          <ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App" />
        </div>
      </div>
      <div className={styles.cardController} ref={cardsControllerRef} tabIndex={0} />
    </div>
  );
};

export default CardCarouselWrapper;
