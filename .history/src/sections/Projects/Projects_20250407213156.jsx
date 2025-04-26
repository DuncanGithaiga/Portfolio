import React from 'react'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}> 
        <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={freshburger} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={fitlift} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={Synthesis} link="https://github.com/" h3="viberr" p="Streaming App"/>
      </div>
    </section>
   
  )
}

export default Projects
