import React from 'react'
import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'

function Skills() {
  return (
    
    
    <section className={styles.container} id='skills'>
    <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillslist}>
      <SkilllistItem src={checkMarkIcon} skill="HTML" />
      <SkilllistItem src={checkMarkIcon} skill="CSS" />
      <SkilllistItem src={checkMarkIcon} skill="Javascript" />
      <SkilllistItem src={checkMarkIcon} skill="Python" />
    </div>
    <hr />
    <div className={styles.skillslist}>
      <SkilllistItem src={checkMarkIcon} skill="React" />
      <SkilllistItem src={checkMarkIcon} skill="Vue" />
      <SkilllistItem src={checkMarkIcon} skill="Laravel" />
      <SkilllistItem src={checkMarkIcon} skill="Flutter" />
    </div>
    <hr />
    <div className={styles.skillslist}>
      <SkilllistItem src={checkMarkIcon} skill="Webpack" />
      <SkilllistItem src={checkMarkIcon} skill="Git" />
      <SkilllistItem src={checkMarkIcon} skill="Bootstrap" />
    </div>
    <hr />
  </section>
  )
}

export default Skills
