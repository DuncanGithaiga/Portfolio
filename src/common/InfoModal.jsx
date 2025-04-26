import { section } from 'framer-motion/client'
import React, { useState, useEffect } from 'react';
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <section className={styles.infoModal} id="infoModal">
        <button className={styles.openButton} onClick={() => setIsOpen(true)}>
         info
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevents modal close when clicking inside
          >
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              x
            </button>
            <h3>Welcome</h3>
            <p></p>
          </div>
        </div>
      )}
    </section>
  )
}

export default InfoModal
