import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container} id='contact'>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.formContainer}>
        <div className={styles.column}>
            <h2 className={styles.subtitle}>Get in Touch</h2>
            <p className={styles.description}>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <p className={styles.description}>Feel free to reach out to me via email or through my social media channels.</p>
            <p className={styles.description}>I look forward to hearing from you!</p>
            
        </div>
        <div className={styles.line}></div>
        <div className={styles.column}>
        <form action="">
            <div className={styles.formGroup}>
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" id="name" name="name" placeholder="Name" required/>
            </div><br />
            <div className={styles.formGroup}>
                {/* <label htmlFor="email">Email</label> */}
                <input type="text" id="email" name="email" placeholder="Email" required/>
            </div><br />
            <div className={styles.formGroup}>
                {/* <label htmlFor="message">Message</label> */}
                <input type="text" id="message" name="message" placeholder="Message" required/>
            </div><br />
            <input className="hover btn" type="submit" value="Submit"/>
        </form>
        </div>
        <div className={styles.line}></div>
        <div className={styles.column}>
            
        </div>
        </div>

    </section>
    
  )
}

export default Contact
