import React from 'react'
import checkMarkIcon from '../assets/checkmark-light.svg'


function Skilllist({ src, skill }) {
  return (
    <span>
        <img src={src} alt="Check mark icon" />
        <p>{skill}</p>
      </span>
  )
}

export default Skilllist
