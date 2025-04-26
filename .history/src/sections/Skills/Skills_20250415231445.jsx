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
    <section className={styles.container} id="skills">
  <div className={styles.sectionDescription}>
    {/* Spline 3D Viewer */}
    <div className={styles.column}>
      <main>
        <Spline scene="https://prod.spline.design/CxwxR9FVX5uNjEMb/scene.splinecode" />
      </main>
    </div>

    {/* Skills Section */}
    <div className={styles.column}>
      <h1 ref={ref} className={`${styles.sectionTitle} ${isVisible ? styles.visible : ""}`}>Skills</h1>

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
      <hr />

      {/* Logos section with 3-column layout */}
      <div className={styles.logosGrid}>
        <div className={styles.logoColumn}>
          <img src={laravel} alt="Laravel" loading="lazy" />
        </div>
        <div className={styles.logoColumn}>
          <img src={dart} alt="Flutter" loading="lazy" />
        </div>
        <div className={styles.logoColumn}>
          <img src={python} alt="Python" loading="lazy" />
        </div>
        <div className={styles.logoColumn}>
          <img src={react} alt="React" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Skills
