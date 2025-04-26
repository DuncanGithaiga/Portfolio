import React from 'react'

function Navbar() {
  return (
      <section className={styles.navbar}>
      <nav className={styles.scrollNavbar}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#timeline">Timeline</a>
        <a href="#contact">Contact</a>
      </nav>
      </section>
  )
}

export default Navbar
