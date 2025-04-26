import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard"; // Adjust to your path
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/freshburger.png";
import fitlift from "../../assets/fitlift.png";
import Synthesis from "../../assets/synthesis.png";

// --- DraggingEvent and CardCarousel ---
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
      document.addEventListener("mouseleave", clearDraggingEvent);

      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler);
        window.removeEventListener("mouseup", clearDraggingEvent);
        document.removeEventListener("mouseleave", clearDraggingEvent);
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
    function distanceInit(e1) {
      let startX, startY;
      if ("touches" in e1) {
        startX = e1.touches[0].clientX;
        startY = e1.touches[0].clientY;
      } else {
        startX = e1.clientX;
        startY = e1.clientY;
      }

      return function (e2) {
        if (e2 === null) {
          return callback(null);
        } else {
          const clientX = "touches" in e2 ? e2.touches[0].clientX : e2.clientX;
          const clientY = "touches" in e2 ? e2.touches[0].clientY : e2.clientY;
          return callback({ x: clientX - startX, y: clientY - startY });
        }
      };
    }
    this.event(distanceInit);
  }
}

class CardCarousel extends DraggingEvent {
  constructor(container) {
    super(container);
    this.container = container;
    this.cards = container.querySelectorAll(".card");
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth =
      (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;
    this.xScale = {};

    window.addEventListener("resize", this.updateCardWidth.bind(this));
    this.build();
    super.getDistance(this.moveCards.bind(this));
  }

  updateCardWidth() {
    this.cardWidth =
      (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;
    this.build();
  }

  build() {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const zIndex = -Math.abs(i - this.centerIndex);
      const leftPos = this.calcPos(x, scale2);
      this.xScale[x] = this.cards[i];
      this.updateCards(this.cards[i], { x, scale, leftPos, zIndex });
    }
  }

  calcScale(x) {
    const formula = 1 - (1 / 5) * Math.pow(x, 2);
    return formula <= 0 ? 0 : formula;
  }

  calcScale2(x) {
    return x <= 0 ? 1 - (-1 / 5) * x : 1 - (1 / 5) * x;
  }

  calcPos(x, scale) {
    if (x < 0) return (scale * 100 - this.cardWidth) / 2;
    if (x > 0) return 100 - (scale * 100 + this.cardWidth) / 2;
    return 100 - (scale * 100 + this.cardWidth) / 2;
  }

  updateCards(card, { x, scale, leftPos, zIndex }) {
    if (x != null) card.setAttribute("data-x", x);
    if (scale != null) {
      card.style.transform = `scale(${scale})`;
      card.style.opacity = scale === 0 ? 0 : 1;
    }
    if (leftPos != null) card.style.left = `${leftPos}%`;
    if (zIndex != null) {
      card.style.zIndex = zIndex;
    }
  }

  moveCards(data) {
    let xDist = data ? data.x / 250 : 0;
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      const originalX = parseInt(card.dataset.x);
      const newX = originalX;
      const scale = this.calcScale(newX + xDist);
      const scale2 = this.calcScale2(newX + xDist);
      const leftPos = this.calcPos(newX + xDist, scale2);
      this.updateCards(card, { scale, leftPos });
    }
  }
}

export default function CardCarouselWrapper() {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      new CardCarousel(containerRef.current);
    }
  }, []);

  return (
    <div className="card-carousel" ref={containerRef}>
      <div className="card">
        <ProjectCard
          src={viberr}
          link="https://github.com/"
          h3="viberr"
          p="Streaming App"
        />
      </div>
      <div className="card">
        <ProjectCard
          src={freshburger}
          link="https://github.com/"
          h3="freshburger"
          p="Burger App"
        />
      </div>
      <div className="card">
        <ProjectCard
          src={fitlift}
          link="https://github.com/"
          h3="fitlift"
          p="Fitness App"
        />
      </div>
      <div className="card">
        <ProjectCard
          src={Synthesis}
          link="https://github.com/"
          h3="Synthesis"
          p="Synthesis App"
        />
      </div>
    </div>
  );
}
