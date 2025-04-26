import React from 'react'
import styles from './NavbarStyles.module.css'
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTools, FaRegClock, FaEnvelope } from "react-icons/fa";

const navItems = [
  { href: "#home", text: "Home", icon: <FaHome /> },
  { href: "#projects", text: "Projects", icon: <FaProjectDiagram /> },
  { href: "#skills", text: "Skills", icon: <FaTools /> },
  { href: "#timeline", text: "Timeline", icon: <FaRegClock /> },
  { href: "#contact", text: "Contact", icon: <FaEnvelope /> },
];

const [activeSection, setActiveSection] = useState("");

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

function Navbar() {
  return (
    <section className={styles.navbar}>
    <nav className={styles.scrollNavbar}>
      {navItems.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={styles.navLink}
        >
          <span className={styles.icon}>{item.icon}</span>
          {item.text}
        </motion.a>
      ))}
    </nav>
  </section>
  )
}

export default Navbar
