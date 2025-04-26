import React from 'react'

function Skilllist() {
  return (
    <section className={styles.container} id='skills'>
    <h1 className=''>Skills</h1>
    <div className={styles.skillslist}>
      <SkilllistItem src={checkMarkIcon} skill="HTML" />
      <SkilllistItem src={checkMarkIcon} skill="CSS" />
      <SkilllistItem src={checkMarkIcon} skill="Javascript" />
      <SkilllistItem src={checkMarkIcon} skill="Python" />
    </div>
  </section>
  )
}

export default Skilllist
