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
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}> 
        <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App"/>
        <ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App"/>
        <ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App"/>
      </div>
     
    </section>
   
  )
}

export default Projects
