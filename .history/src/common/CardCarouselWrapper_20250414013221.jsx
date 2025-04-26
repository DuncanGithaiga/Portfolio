import React, { useRef, useEffect } from 'react';
import './CardCarousel.css'; // Assuming your styles live here
import ProjectCard from '../../common/ProjectCard'
import styles from '../sections/Projects/Projects.module.css'
import viberr from '../../assets/viberr.png'
import freshburger from '../../assets/fresh-burger.png'
import fitlift from '../../assets/fitlift.png'
import Synthesis from '../../assets/hipsster.png'

// Import and paste the DraggingEvent & CardCarousel class definitions here
// (or import from a separate JS module)

const CardCarouselWrapper = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cardsContainer = containerRef.current;
      const cardsController = null; // if you're not using keyboard control
      new CardCarousel(cardsContainer, cardsController);
    }
  }, []);

  return (
    <div className="card-carousel" ref={containerRef}>
        <ProjectCard src={viberr} link="https://github.com/" h3="viberr" p="Streaming App"/>
        <ProjectCard src={freshburger} link="https://github.com/" h3="freshburger" p="Burger App"/>
        <ProjectCard src={fitlift} link="https://github.com/" h3="fitlift" p="Fitness App"/>
        <ProjectCard src={Synthesis} link="https://github.com/" h3="Synthesis" p="Synthesis App"/>
    </div>
  );
};

export default CardCarouselWrapper;
