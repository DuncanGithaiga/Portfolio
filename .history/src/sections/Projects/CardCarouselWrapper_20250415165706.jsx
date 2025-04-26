import React, { useEffect, useRef } from "react";
import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import fitlift from "../../assets/fitlift.png";
import Synthesis from "../../assets/hipsster.png";

function CardCarouselWrapper() {
  return (
    <section id='projects'  className={styles.cardCarouselWrapper}>
       <div className={styles.projectContainer}>
        <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App"/>
        <ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App"/>
        <ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App"/>
      </div>
    </section>
  )
}

export default CardCarouselWrapper
