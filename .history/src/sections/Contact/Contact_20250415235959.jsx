import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container} id="contact">
    <h1 className={styles.title}>Contact</h1>
  
    <div className={styles.formContainer}>
      <div className={styles.line}></div>
  
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
      </div>
    </div>
  </section>
    
  )
}

export default Contact
