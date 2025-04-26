import React from 'react'
import CardCarouselWrapper from './CardCarouselWrapper';
import styles from './ProjectStyles.module.css';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.title}>Projects</h1> 
     
      <CardCarouselWrapper />
      
  </section> 
   
  )
}

export default Projects
