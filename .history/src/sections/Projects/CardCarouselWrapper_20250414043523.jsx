import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import fitlift from "../../assets/fitlift.png";
import Synthesis from "../../assets/hipsster.png";

const CardCarouselWrapper = () => {
  const carouselRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = carouselRef.current;
    const cardsController = controllerRef.current;

    if (!cardsContainer || !cardsController) return;

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
          document.addEventListener("mouseleave", clearDraggingEvent);
          window.addEventListener("mouseup", clearDraggingEvent);

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
          let startY;

          if ("touches" in e1) {
            startY = e1.touches[0].clientY;
          } else {
            startY = e1.clientY;
          }

          return function (e2) {
            if (e2 === null) {
              return callback(null);
            } else {
              let deltaY;
              if ("touches" in e2) {
                deltaY = e2.touches[0].clientY - startY;
              } else {
                deltaY = e2.clientY - startY;
              }
              return callback({ y: deltaY });
            }
          };
        }

        this.event(distanceInit);
      }
    }

    class CardCarousel {
      constructor(container, controller) {
        this.container = container;
        this.controllerElement = controller;
        this.cards = container.querySelectorAll(".card");
        this.centerIndex = Math.floor(this.cards.length / 2);
        this.cardHeight = 100; // as percentage
        this.zIndex = 5;
        this.init();
      }

      init() {
        this.updateCards();
        this.attachEvents();
      }

      attachEvents() {
        const drag = new DraggingEvent(this.controllerElement);
        drag.getDistance((data) => {
          if (data === null) return;
          const yDist = data.y / 250;
          this.updateCards(yDist);
        });
      }

      updateCards(yDist = 0) {
        for (let i = 0; i < this.cards.length; i++) {
          const offset = i - this.centerIndex;
          const adjustedOffset = offset + yDist;
          const scale = 1 - Math.abs(adjustedOffset) * 0.2;
          const top = 50 + adjustedOffset * 40;

          this.cards[i].style.transform = `translateY(-50%) scale(${scale})`;
          this.cards[i].style.top = `${top}%`;
          this.cards[i].style.zIndex = `${this.zIndex - Math.abs(offset)}`;
          this.cards[i].style.opacity = scale < 0.3 ? 0 : 1;
        }
      }
    }

    new CardCarousel(cardsContainer, cardsController);
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.cardCarousel} ref={carouselRef}>
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
        ref={controllerRef}
        tabIndex={0}
      />
    </div>
  );
};

export default CardCarouselWrapper;
