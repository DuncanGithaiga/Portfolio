import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { div } from 'framer-motion/client';

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
  const [index, setIndex] = useState(0);
  const visibleCards = 4;
  const total = projects.length;

  const getVisibleItems = () => {
    const looped = [...projects, ...projects, ...projects];
    const start = total + index;
    return looped.slice(start, start + visibleCards);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6, // adjust sensitivity (0.6 = 60% visible)
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  return (
    <section id="projects" className={activeSection === "projects" ? "active" : ""}>
    <div className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.line}></div>
      <div className={styles.carousel}>
        <div className={styles.innerCarousel}>
          {getVisibleItems().map((project, i) => (
              <div key={i} className={styles.cardWrapper}>
                <ProjectCard {...project} />
              </div>
            ))}
      </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;