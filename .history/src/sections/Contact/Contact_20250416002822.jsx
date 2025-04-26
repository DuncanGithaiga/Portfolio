import React from 'react'
import styles from './ContactStyles.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
   
  return (
    <section className={styles.container} id="contact">
    <h1 className={styles.title}>Contact</h1>
    <div className={styles.line}></div>
    <div className={styles.formContainer}>
      {/* Column 1: Contact Text */}
      <div className={styles.column}>
        <p>
          I'm open to freelance opportunities, collaborations, or just a friendly hello.
          Let's build something great together!
        </p>
      </div>
  
      {/* Column 2: Form */}
      <div className={styles.column}>
        <form>
          <div className={styles.formGroup}>
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className={styles.formGroup}>
            <textarea id="message" name="message" placeholder="Message" rows="4" required />
          </div>
          <input className={styles.submitButton} type="submit" value="Submit" />
        </form>
      </div>
  
      {/* Column 3: Placeholder */}
      <div className={styles.column}>
        {/* You can add a contact icon, map, or social links here */}
        <div className={styles.iconGrid}>
            <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaEnvelope />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
            </a>
            <a href="tel:+1234567890" className={styles.icon}>
            <FaPhone />
            </a>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Contact
