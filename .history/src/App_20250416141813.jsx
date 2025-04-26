import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import CustomCursor from './common/CustomCursor'
import Navbar from './sections/Navbar/Navbar'
import Timeline from './sections/Timeline/Timeline'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      {activeSection && (
  <div className={`${styles.blurOverlay} ${styles.visible}`} />
)}
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}

export default App
