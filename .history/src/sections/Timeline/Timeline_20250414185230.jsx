// components/Timeline.jsx
import React from "react";
import styles from "./TimelineStyles.module.css";

const timelineData = [
  {
    year: "2020",
    title: "Started Learning Code",
    description: "Began with HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "First Project",
    description: "Built my first React app.",
  },
  {
    year: "2022",
    title: "Freelancing",
    description: "Worked with clients on web design projects.",
  },
  {
    year: "2023",
    title: "Internship",
    description: "Frontend Developer Intern at TechCorp.",
  },
];

const Timeline = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="timeline-item"
>
<div className={styles.timeline}>
      {timelineData.map((event, idx) => (
        <div className={styles.event} key={idx}>
          <div className={styles.content}>
            <span className={styles.year}>{event.year}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
</motion.div>
    
  );
};

export default Timeline;
