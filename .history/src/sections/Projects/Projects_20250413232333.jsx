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
      <h2 className="line-title">trending games</h2>
  <div className="owl-carousel custom-carousel owl-theme">
    <div className="item active" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
      <div className="item-desc">
        <h3>Dota 2</h3>
        <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>  
    <div className="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg);">
      <div className="item-desc">
        <h3>The Witcher 3</h3>
        <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
          of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div className="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg);">
      <div className="item-desc">
        <h3>RDR 2</h3>
        <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div className="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg);">
      <div className="item-desc">
        <h3>PUBG Mobile</h3>
        <p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div className="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg);">
      <div className="item-desc">
        <h3>Fortnite</h3>
        <p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod
          for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
    <div className="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
      <div className="item-desc">
        <h3>Far Cry 5</h3>
        <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
          which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
      </div>
    </div>
  </div>
  </section> 
   
  )
}

export default Projects
