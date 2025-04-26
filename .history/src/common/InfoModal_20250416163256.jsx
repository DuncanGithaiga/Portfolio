import { section } from 'framer-motion/client'
import React, { useState, useEffect } from 'react';
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className={styles.infoModal} id="infoModal">
        <button className={styles.openButton} onClick={() => setShowModal(true)}>
        Show Info
      </button>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevents modal close when clicking inside
          >
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2>About This Page</h2>
            <p>This is a custom modal with blur background and circular buttons!</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default InfoModal
