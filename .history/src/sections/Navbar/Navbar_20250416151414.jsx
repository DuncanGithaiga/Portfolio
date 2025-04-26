import React, { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css'
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTools, FaRegClock, FaEnvelope } from "react-icons/fa";

const navItems = [
    { href: "hero", text: "Home", icon: <FaHome /> },
    { href: "projects", text: "Projects", icon: <FaProjectDiagram /> },
    { href: "skills", text: "Skills", icon: <FaTools /> },
    { href: "timeline", text: "Timeline", icon: <FaRegClock /> },
    { href: "contact", text: "Contact", icon: <FaEnvelope /> },
  ];
  
  function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
  
    useEffect(() => {
        const sections = document.querySelectorAll("section");
      
        const observer = new IntersectionObserver(
          entries => {
            const visible = entries
              .filter(entry => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
            if (visible.length > 0) {
              setActiveSection(visible[0].target.id); // no #
            }
          },
          { threshold: 0.6 }
        );
      
        sections.forEach(section => observer.observe(section));
        return () => sections.forEach(section => observer.unobserve(section));
      }, []);
  
    return (
      <section id='navbar' className={styles.navbar}>
        <nav className={styles.scrollNavbar}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={`#${item.href}`} // prefix #
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.navLink} ${activeSection === item.href ? styles.active : ''}`}
            >
              {activeSection === item.href && (
                <motion.div
                className={`${styles.activeLines} ${styles.active}`} // <- add active class here
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
    );
  }
  
  export default Navbar;