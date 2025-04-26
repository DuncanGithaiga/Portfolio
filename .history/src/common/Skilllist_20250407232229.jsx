import React from 'react'
import checkMarkIcon from '../assets/checkmark-light.svg'


function Skilllist({ src, p }) {
  return (
    <span>
        <img src={checkMarkIcon} alt="Check mark icon" />
        <p>HTML</p>
      </span>
  )
}

export default Skilllist
