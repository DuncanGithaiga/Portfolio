// components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";
import jQuery from 'jquery';
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

const TimelineItem = ({ event, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
  return (
    <section className={styles.timelineContainer}>
      <h1 className={styles.title}>My Journey</h1>
      <div className={styles.timeline}>
        {timelineData.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className={`${styles.event} ${isEven ? styles.left : styles.right}`}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.verticalTimeline}>
        {timelineData.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;