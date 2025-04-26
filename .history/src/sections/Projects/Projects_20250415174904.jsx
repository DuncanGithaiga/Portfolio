import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  { src: viberr, h3: "Viberr", p: "Streaming App" },
  { src: freshBurger, h3: "Fresh Burger", p: "Burger Joint" },
  { src: hipsster, h3: "Hipsster", p: "Glasses Shop" },
  { src: fitLift, h3: "FitLift", p: "Fitness App" },
];

// Duplicate the items for looping effect
// const getLoopedProjects = () => [
//   ...projects.slice(-2),
//   ...projects,
//   ...projects.slice(0, 2),
// ];

function Projects() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalCards = projects.length;

  const loopedProjects = [
    ...projects.slice(-2),
    ...projects,
    ...projects.slice(0, 2),
  ];

  // Set initial scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && carousel.children.length > 0) {
      const card = carousel.children[0];
      const width = card.offsetWidth + 32;
      setCardWidth(width);
      carousel.scrollLeft = width * totalCards;
    }
  }, [totalCards]);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = cardWidth * (totalCards + 2);
    const minScroll = cardWidth;

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft = cardWidth * totalCards;
    } else if (carousel.scrollLeft >= maxScroll) {
      carousel.scrollLeft = cardWidth * 2;
    }
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && carouselRef.current) {
        carouselRef.current.scrollLeft += 1.5;
        handleScroll();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [cardWidth, paused]);

  const scrollByCard = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrow}
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll Left"
        >
          ◀
        </button>
        <div
          className={styles.carousel}
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loopedProjects.map((proj, index) => (
            <div className={styles.card} key={index}>
              <ProjectCard
                src={proj.src}
                h3={proj.h3}
                p={proj.p}
                link="https://github.com"
              />
            </div>
          ))}
        </div>
        <button
          className={styles.arrow}
          onClick={() => scrollByCard(1)}
          aria-label="Scroll Right"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Projects;