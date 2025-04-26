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
const getLoopedProjects = () => [
  ...projects.slice(-2),
  ...projects,
  ...projects.slice(0, 2),
];

function Projects() {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const totalCards = projects.length;

  // Clone first and last elements for wrap-around illusion
  const loopedProjects = [
    ...projects.slice(-2),
    ...projects,
    ...projects.slice(0, 2),
  ];

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel && carousel.children.length > 0) {
      const card = carousel.children[0];
      setCardWidth(card.offsetWidth + 32); // account for margin/gap
      carousel.scrollLeft = cardWidth * totalCards; // center position
    }
  }, [cardWidth, totalCards]);

  // Loop effect: detect edges and jump back to center
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

  // Auto-play every 30ms
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      carousel.scrollLeft += 1.5;
      handleScroll();
    }, 30);

    return () => clearInterval(interval);
  }, [cardWidth]);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div
        className={styles.carousel}
        ref={carouselRef}
        onScroll={handleScroll}
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
    </section>
  );
}

export default Projects;