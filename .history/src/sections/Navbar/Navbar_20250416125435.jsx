import React, { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css'
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTools, FaRegClock, FaEnvelope } from "react-icons/fa";

const navItems = [
  { href: "hero", text: "Hero", icon: <FaHome /> },
  { href: "projects", text: "Projects", icon: <FaProjectDiagram /> },
  { href: "skills", text: "Skills", icon: <FaTools /> },
  { href: "timeline", text: "Timeline", icon: <FaRegClock /> },
  { href: "contact", text: "Contact", icon: <FaEnvelope /> },
];

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
    </div>
    <section className={styles.navbar}>
    <nav className={styles.scrollNavbar}>
      {navItems.map((item, index) => (
            <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.navLink} ${activeSection === item.href ? styles.active : ''}`}
        >
            {activeSection === item.href && (
            <motion.div
                className={styles.activeLines}
                layoutId="activeLines"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                <span className={styles.lineTop} />
                <span className={styles.lineBottom} />
            </motion.div>
            )}
        
            <span className={styles.icon}>{item.icon}</span>
            {item.text}
        </motion.a>
      ))}
    </nav>
  </section>
  </>
  )
}

export default Navbar
