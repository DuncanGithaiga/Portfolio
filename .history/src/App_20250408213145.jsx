import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import CustomCursor from './common/CustomCursor'
import GlowBackground from './common/GlowBackground'

function App() {
  return (
    <>
      <GlowBackground />
      <CustomCursor />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
