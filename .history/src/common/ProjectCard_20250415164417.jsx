import React from 'react'

function ProjectCard( {src, link, h3, p} ) {
  return (
    <card>
    <a href={link} target='_blank'><img className='hover' src={src} alt="{h3} logo" />
      <h3>{ h3 }</h3>
      <p> {p} </p>
    </a>
    </card>
  )
}

export default ProjectCard
