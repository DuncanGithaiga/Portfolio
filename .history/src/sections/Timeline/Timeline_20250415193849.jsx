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
    icon: <Code size={20} />,
  },
  {
    year: "2021",
    title: "First Project",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-video.svg",
    description: "Built my first React app.",
    icon: <Laptop size={20} />,
  },
  {
    year: "2022",
    title: "Freelancing",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-music.svg",
    description: "Worked with clients on web design projects.",
    icon: <Briefcase size={20} />,
  },
  {
    year: "2023",
    title: "Internship",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg",
    description: "Frontend Developer Intern at TechCorp.",
    icon: <Rocket size={20} />,
  },
];

const TimelineItem = ({ event, index, setActiveIndex, activeIndex, scrolledSteps }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  useEffect(() => {
    if (
      activeIndex === index &&
      ref.current &&
      !scrolledSteps.current.has(index)
    ) {
      scrolledSteps.current.add(index);
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex, index, scrolledSteps]);

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
  const scrolledSteps = useRef(new Set());

  return (
    <div className={styles.timelineHorizontalWrapper}>
    <h1 className={styles.title}>My Journey</h1>
  
    <div className={styles.timelineTrack}>
      {/* Top row (even indexes) */}
      <div className={styles.timelineRow}>
      {timelineData.map((event, index) =>
    index % 2 === 0 ? (
      <div key={index} className={styles.cardWrapper}>
        <TimelineItem
          event={event}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrolledSteps={scrolledSteps}
        />
      </div>
    ) : (
      <div key={index} className={styles.cardWrapper} />
          )
        )}
      </div>
  
      {/* Progress bar line */}
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
       {/* Heartbeat dots */}
<div className={styles.progressTrack}>
  {timelineData.map((_, idx) => (
    <div
      key={idx}
      className={`${styles.progressDot} ${activeIndex === idx ? styles.active : ""}`}
      style={{ left: `${(idx / (timelineData.length - 1)) * 100}%` }}
    >
      {activeIndex === idx && <div className={styles.pulse} />}
    </div>
  ))}
</div>
      </div>
  
      {/* Bottom row (odd indexes) */}
      <div className={styles.timelineRow}>
        {timelineData.map((event, index) =>
          index % 2 !== 0 ? (
            <div key={index} className={styles.cardWrapper}>
              <TimelineItem event={event}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                scrolledSteps={scrolledSteps}
                />
            </div>
          ) : (
            <div key={index} className={styles.cardWrapper} />
          )
        )}
      </div>
    </div>
  </div>
  );
};

export default Timeline;

