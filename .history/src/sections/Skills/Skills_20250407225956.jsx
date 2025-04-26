import React from 'react'
import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'

function Skills( { src, skill }) {
  return (
    <span>
    <img src={checkMarkIcon} alt="Check mark icon" />
    <p>HTML</p>
  </span>
    
  )
}

export default Skills
