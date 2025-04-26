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
  const [isDragging, setIsDragging] = useState(false);
  const scrollAmount = 2;
  const itemWidth = 320; // card width + gap estimate
  const loopedProjects = getLoopedProjects();

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const middleIndex = projects.length;
    container.scrollLeft = middleIndex * itemWidth;

    const handleAutoScroll = () => {
      if (isDragging) return;

      container.scrollLeft += scrollAmount;

      const maxScroll = itemWidth * (projects.length + 2);

      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = itemWidth * projects.length;
      }
    };

    const interval = setInterval(handleAutoScroll, 20);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleScroll = () => {
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = itemWidth * (projects.length + 2);

    // Jump back to looped middle if we're out of bounds
    if (scrollLeft <= 0) {
      container.scrollLeft = itemWidth * projects.length;
    } else if (scrollLeft >= maxScroll) {
      container.scrollLeft = itemWidth * projects.length;
    }
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <motion.div
        ref={carouselRef}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onScroll={handleScroll}
      >
        <motion.div className={styles.innerCarousel}>
          {loopedProjects.map((proj, index) => (
            <motion.div key={index} className={styles.card}>
              <ProjectCard
                src={proj.src}
                link="https://github.com"
                h3={proj.h3}
                p={proj.p}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;