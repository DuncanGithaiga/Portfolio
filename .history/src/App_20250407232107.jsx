import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
