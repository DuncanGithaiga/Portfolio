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
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}></Swiper>
        <SwiperSlide><ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/></SwiperSlide>
        <SwiperSlide><ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App"/></SwiperSlide>
        <SwiperSlide><ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App"/></SwiperSlide>
        <SwiperSlide><ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App"/></SwiperSlide>
        <Swiper/>
      </div>
    </section>
   
  )
}

export default Projects
