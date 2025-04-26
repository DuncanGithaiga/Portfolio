// components/Timeline.jsx
// components/Timeline.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, Code, Briefcase, Rocket } from "lucide-react"
import styles from "./TimelineStyles.module.css";

const timelineData = [
  {
    year: "2020",
    title: "Started Learning Code",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
    description: "Began with HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "First Project",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-video.svg",
    description: "Built my first React app.",
  },
  {
    year: "2022",
    title: "Freelancing",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-music.svg",
    description: "Worked with clients on web design projects.",
  },
  {
    year: "2023",
    title: "Internship",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg",
    description: "Frontend Developer Intern at TechCorp.",
  },
];

const TimelineItem = ({ event, index, setActiveIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <div className={styles.stepWrapper} ref={ref}>
      <motion.div
        className={`${styles.stepCard} ${inView ? styles.visible : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className={styles.icon}>{event.icon}</div>
        <span className={styles.year}>{event.year}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </motion.div>
    </div>
  );
};

// Initialize jQuery for smooth scrolling
const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.timelineContainer}>
      <h1 className={styles.title}>My Journey</h1>
      <div className={styles.timeline}>
      <div className={styles.timelineWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ height: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
          />
          {timelineData.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.progressDot} ${activeIndex === idx ? styles.active : ""}`}
              style={{ top: `${(idx / (timelineData.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        <div className={styles.verticalTimeline}>
          {timelineData.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

