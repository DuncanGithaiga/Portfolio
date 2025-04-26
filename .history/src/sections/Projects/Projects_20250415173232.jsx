import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current && innerRef.current) {
        setScrollWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // 🔁 Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && innerRef.current && carouselRef.current) {
        const container = carouselRef.current;
        const currentScroll = container.scrollLeft;
        const nextScroll = currentScroll + 2;

        if (nextScroll >= scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollTo({ left: nextScroll, behavior: "smooth" });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [scrollWidth, isDragging]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className={styles.container} ref={ref}>
      <h1 className="sectionTitle">Projects</h1>
      <motion.div
        ref={carouselRef}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <motion.div
          ref={innerRef}
          className={styles.innerCarousel}
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className={styles.card} variants={containerVariants}>
            <ProjectCard src={viberr} link="https://github.com" h3="Viberr" p="Streaming App" />
          </motion.div>
          <motion.div className={styles.card} variants={containerVariants}>
            <ProjectCard src={freshBurger} link="https://github.com" h3="Fresh Burger" p="Burger Joint" />
          </motion.div>
          <motion.div className={styles.card} variants={containerVariants}>
            <ProjectCard src={hipsster} link="https://github.com" h3="Hipsster" p="Glasses Shop" />
          </motion.div>
          <motion.div className={styles.card} variants={containerVariants}>
            <ProjectCard src={fitLift} link="https://github.com" h3="FitLift" p="Fitness App" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;