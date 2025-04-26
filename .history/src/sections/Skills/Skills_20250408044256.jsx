import styles from './SkillsStyles.module.css'
import Skilllist from '../../common/Skilllist'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
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
    <h1 ref={ref} className={styles.sectionTitle === isVisible ? 'visible' : ''}>Skills</h1>
    <div className={styles.sectionDescription}>
    <div className={styles.column}>
    <main>
      <Spline
        scene="https://prod.spline.design/TWxtnAS5Oimvrq54/scene.splinecode" 
      />
    </main>
    {/* <main>
      <Spline
        scene="https://prod.spline.design/Bi5AUzzBm2Y07EBJ/scene.splinecode" 
      />
    </main> */}
    </div>
    <div className={styles.column}>
    <div className={styles.skilllist}>
      <Skilllist src={checkMarkIcon} skill="HTML" />
      <Skilllist src={checkMarkIcon} skill="CSS" />
      <Skilllist src={checkMarkIcon} skill="Javascript" />
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
      <Skilllist src={checkMarkIcon} skill="Vue" />
      <Skilllist src={checkMarkIcon} skill="Laravel" />
      <Skilllist src={checkMarkIcon} skill="Flutter" />
    </div>
    </div>
    <div className={styles.column}></div>
    <main>
      <Spline
        scene="https://prod.spline.design/TWxtnAS5Oimvrq54/scene.splinecode" 
      />
    </main>
    </div>
    <hr />
  </section>
  )
}

export default Skills
