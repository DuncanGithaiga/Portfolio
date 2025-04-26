import React from 'react'
import checkMarkIcon from '../assets/checkmark-light.svg'


function Skilllist({ src, skills }) {
  return (
    <span>
        <img src={src} alt="Check mark icon" />
        <p>{skills}</p>
      </span>
  )
}

export default Skilllist
