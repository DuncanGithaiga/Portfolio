import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container} id='contact'>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.formContainer}>
        <div className={styles.column}>

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
