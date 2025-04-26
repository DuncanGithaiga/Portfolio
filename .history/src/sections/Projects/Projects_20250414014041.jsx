import React from 'react'
import CardCarouselWrapper from '../../components/CardCarouselWrapper/CardCarouselWrapper';
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardCarousel}>
      <div className={styles.projectsContainer}> 
      <CardCarouselWrapper />
      </div>
      </div>
  </section> 
   
  )
}

export default Projects
