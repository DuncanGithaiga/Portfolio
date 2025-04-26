import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import wave from '../../assets/waves.png'
import CV from '../../assets/CV.pdf'
import Spline from '@splinetool/react-spline';
import { useTheme } from '../../common/ThemeContext'
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from 'react';
function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
      const [coords, setCoords] = useState({ x: 0, y: 0 });
    
      useEffect(() => {
        const moveHandler = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };
    
        window.addEventListener('mousemove', moveHandler);
        return () => window.removeEventListener('mousemove', moveHandler);
      }, []);
  return (
    <section id="hero"  className={styles.container}>
     
       <div className={styles.glowWrapper}>
       <div className={styles.glowEffect} style={{left: coords.x,top: coords.y,}}/>
       <div className={styles.heroContainer}>
         {/* <!-- The sidebar --> */}
      <nav class="scroll-navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
        <div className={styles.colorModeContainer}>
            {/* <img src={heroImg} className={styles.hero} alt="Profile picture of DG" /> */}
       <main className={styles.hero}>
       <Spline 
        className='hero-img'  scene="https://prod.spline.design/Eb-O5CxQcWMZ3xxg/scene.splinecode" 
      />
       </main>
            <img src={themeIcon} className={styles.colorMode} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1><TypeAnimation sequence={['Duncan Githaiga',1000, 'DG']} cursor= {false}/></h1>
            <h2>&lt;&gt; Software Engineer &lt;/&gt; </h2>
            <span>
            <a href="https://twitter.com/">
             <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://github.com/">
             <img src={githubIcon} alt="github" />
            </a>
            <a href="https://linkedin.com/">
             <img src={linkedinIcon} alt="linkedin" />
            </a>
            {/* <p className={styles.description}> Create your world with DG </p> */}
            <p><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Create your world with a Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Create your world with a Designer',
        1000,
        'Create your world with an Engineer',
        1000,
        'Create your world with DG',
        1000
      ]}
      wrapper="span"
      speed={40}
      className={styles.description}
      repeat={3}
    /></p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
            </span>
        </div>
     </div>
    </div>
    </section>
  )
}
export default Hero
