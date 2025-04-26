import React from 'react'
import styles from './SkillsStyles.module.css'
import Skilllist from '../../common/Skilllist'
import checkMarkIcon from '../../assets/checkmark-light.svg'

function Skills() {
  return (
    <section className={styles.container} id='skills'>
    <h1 className='sectionTitle'>Skills</h1>
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
    </div>
    <hr />
    <div className={styles.skilllist}>
      <Skilllist src={checkMarkIcon} skill="React" />
      <Skilllist src={checkMarkIcon} skill="Vue" />
      <Skilllist src={checkMarkIcon} skill="Laravel" />
      <Skilllist src={checkMarkIcon} skill="Flutter" />
    </div>
    <hr />
  </section>
  )
}

export default Skills
