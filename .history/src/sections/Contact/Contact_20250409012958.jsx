import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container} id='contact'>
        <h1 className={styles.title}>Contact</h1>
        <form action="">
            <div className={styles.formGroup}>
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" id="name" name="name" placeholder="name" required/>
            </div>
            <div className={styles.formGroup}>
                {/* <label htmlFor="email">Email</label> */}
                <input type="text" id="email" name="email" placeholder="email" required/>
            </div>
            <div className={styles.formGroup}>
                {/* <label htmlFor="message">Message</label> */}
                <input type="text" id="message" name="message" placeholder="message" required/>
            </div>
            <input className="hover btn" type="submit" value="submit"/>
        </form>
        <form action="">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
    </section>
    
  )
}

export default Contact
