import styles from './FooterStyles.module.css';
import React from 'react'

function Footer() {
  return (
    <section className={styles.container} id='footer'>
       <p>&#169; 2025 DG <br />
        All rights reserved. <br />
        Designed and developed by DG. <br />
       </p>
    </section>
  )
}

export default Footer
