import React from 'react'
import checkMarkIcon from '../assets/check-mark.svg'
import styles from './SkilllistStyles.module.css'

function Skilllist({ src, skill }) {
  return (
    <span>
        <img src={checkMarkIcon} alt="Check mark icon" />
        <p>HTML</p>
      </span>
  )
}

export default Skilllist
