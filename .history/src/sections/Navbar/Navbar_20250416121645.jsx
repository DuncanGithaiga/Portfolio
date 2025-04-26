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
    const [activeSection, setActiveSection] = useState("");
    const [open, setOpen] = useState(false);

useEffect(() => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
      });
    },
    { threshold: 0.6 }
  );
  sections.forEach(section => observer.observe(section));
  return () => sections.forEach(section => observer.unobserve(section));
}, []);

  return (
    <>
    {activeSection && (
  <div className={styles.pageOverlay}></div>
    )}
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
          animate={{
            opacity: activeSection && activeSection !== item.href ? 0.3 : 1,
            filter: activeSection && activeSection !== item.href ? 'blur(2px)' : 'none',
          }}
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
                            <br />
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
