import React from 'react'

function ProjectCard( {src, link} ) {
  return (
    <a href={link}><img className='hover' src={src} alt="viber logo" />
      <h3>Viberr</h3>
      <p>Streaming App</p>
    </a>
  )
}

export default ProjectCard
