import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

import React, { useRef } from "react";
import { motion } from "framer-motion";

function Projects() {
  const carouselRef = useRef(null);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <motion.div
        ref={carouselRef}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.innerCarousel}
          drag="x"
          dragConstraints={{ right: 0, left: -carouselRef.current?.scrollWidth }}
          initial={{ x: 0 }}
        >
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
      </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
