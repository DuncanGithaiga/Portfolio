import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard"; 
import styles from '../Projects/ProjectStyles.module.css';// Adjust to your path
import viberr from '../../assets/viberr.png';
import freshburger from '../../assets/fresh-burger.png';
import fitlift from '../../assets/fitlift.png';
import Synthesis from '../../assets/hipsster.png';

// --- DraggingEvent and CardCarousel ---
const CardCarouselWrapper = () => {
  const carouselRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = carouselRef.current;
    const cardsController = controllerRef.current;

    if (!cardsContainer) return;

    // Include DraggingEvent and CardCarousel definitions here or import them

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
          let startingX, startingY;

          if ("touches" in e1) {
            startingX = e1.touches[0].clientX;
            startingY = e1.touches[0].clientY;
          } else {
            startingX = e1.clientX;
            startingY = e1.clientY;
          }

          return function (e2) {
            if (e2 === null) {
              return callback(null);
            } else {
              if ("touches" in e2) {
                return callback({
                  x: e2.touches[0].clientX - startingX,
                  y: e2.touches[0].clientY - startingY,
                });
              } else {
                return callback({
                  x: e2.clientX - startingX,
                  y: e2.clientY - startingY,
                });
              }
            }
          };
        }

        this.event(distanceInit);
      }
    }

    // Paste the full CardCarousel class here (same as your previous code)

    new CardCarousel(cardsContainer, cardsController);

  }, []);

  return (
    <div className="projectContainer">
      <div className="card-carousel" ref={carouselRef}>
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
      <div className="card-controller" ref={controllerRef} tabIndex={0} />
    </div>
  );
};

export default CardCarouselWrapper;