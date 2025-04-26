import React from 'react'
import checkMarkIcon from '../assets/checkmark-light.svg'


function Skilllist({ src, p }) {
  return (
    <span>
        <img src={src} alt="Check mark icon" />
        <p>{p}</p>
      </span>
  )
}

export default Skilllist
