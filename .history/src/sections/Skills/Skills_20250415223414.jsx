import styles from './SkillsStyles.module.css'
import Skilllist from '../../common/Skilllist'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import laravel from '../../assets/laravel-framework.png'
import dart from '../../assets/dart-programming.png'
import python from '../../assets/python-language.png'
import react from '../../assets/react.png'
import { useTheme } from '../../common/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // only run once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  
  return (
    <section className={styles.container} id='skills'>
    <div className={styles.sectionDescription}>
    <div className={styles.Spline}>
    <main>
    <Spline
        scene="https://prod.spline.design/CxwxR9FVX5uNjEMb/scene.splinecode" 
      />
    </main>
    
    </div>
    <div className={styles.Skills}>
    <h1 ref={ref} className={styles.sectionTitle === isVisible ? 'visible' : ''}>Skills</h1>
    <div>
    <div className={styles.skilllist}>
      <Skilllist src={checkMarkIcon} skill="Javascript" />
      <Skilllist src={checkMarkIcon} skill="Dart" />
      <Skilllist src={checkMarkIcon} skill="Php" />
      <Skilllist src={checkMarkIcon} skill="Python" />
    </div>
    <hr />
    <div className={styles.skilllist}>
      <Skilllist src={checkMarkIcon} skill="Webpack" />
      <Skilllist src={checkMarkIcon} skill="Git" />
      <Skilllist src={checkMarkIcon} skill="Bootstrap" />
      <Skilllist src={checkMarkIcon} skill="Spline" />
    </div>
    <hr />
    <div className={styles.skilllist}>
      <Skilllist src={checkMarkIcon} skill="React" />
      <Skilllist src={checkMarkIcon} skill="Machine Learning" />
      <Skilllist src={checkMarkIcon} skill="Laravel" />
      <Skilllist src={checkMarkIcon} skill="Flutter" />
    </div>
    <div className={styles.column}>
      <img src={laravel} alt="Laravel" loading="lazy" />
    </div>
    <div className={styles.column}>
      <img src={dart} alt="Flutter" loading="lazy" />
    </div>
    <div className={styles.column}>
      <img src={python} alt="Python" loading="lazy" />
    </div>
    <div className={styles.column}>
      <img src={react} alt="React" loading="lazy" />
    </div>
    </div>
    </div> 
    <div className={styles.logos}>
    
</div>
    </div> 
    <hr />
  </section>
  )
}

export default Skills
