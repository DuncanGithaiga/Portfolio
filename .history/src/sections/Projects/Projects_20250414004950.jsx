import React from 'react'
import ProjectCard from '../../common/ProjectCard'
import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshburger from '../../assets/fresh-burger.png'
import fitlift from '../../assets/fitlift.png'
import Synthesis from '../../assets/hipsster.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Projects() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 2) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, [projects.length]);

  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
  ];
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}> 
        <div className={styles.cardCarousel}>
        <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App"/>
        <ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App"/>
        <ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App"/>
        </div>
      </div>
  </section> 
   
  )
}

export default Projects
