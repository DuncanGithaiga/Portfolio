import React from 'react'
import styles from './ContactStyles.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { TbMessage2Filled } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { motion } from 'framer-motion';

function Contact() {
    const style = { color: "#7f5af0", fontSize: "42px" }
  return (
    <section className={styles.container} id="contact">
    <h1 className={styles.title}>Contact</h1>
    <div className={styles.line}></div>
    <div className={styles.formContainer}>
      {/* Column 1: Contact Text */}
      <div className={styles.column}>
        <h2>Get in Touch</h2>
        <p>
          I'm open to freelance opportunities, collaborations, or just a friendly hello.
          Let's build something great together!
        </p>
        <p>Looking forward to connecting!</p>
        <motion.div 
        className={styles.card}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>  
        <div className={styles.cardContent}>
            <TbMessage2Filled style={style} />
            <h4 style={{ margin: 0 }}>Message me:</h4>
            <a href="mailto:email@example.com">email@example.com</a>    
        </div>
        </motion.div>
        <div className={styles.card}>
        <div className={styles.cardContent}>
            <IoMdContacts style={style} />
            <h4 style={{ margin: 0 }}>Contact me:</h4>
            <a href="mailto:email@example.com">tel:+1234567890</a>
        </div>
        </div>
        <div className={styles.card}>
        <div className={styles.cardContent}>
            <FaAddressBook style={style} />
            <h4 style={{ margin: 0 }}>Address:</h4>
            <a href="mailto:email@example.com">email@example.com</a>
        </div>
        </div>
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
        <h2>Connect with me</h2>
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
