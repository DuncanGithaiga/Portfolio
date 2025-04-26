import { section } from 'framer-motion/client'
import React, { useState, useEffect } from 'react';
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={styles.modalContainer}>
        <button className={styles.openButton} onClick={() => setIsOpen(!isOpen)}>
          ℹ️
        </button>
  
        {isOpen && (
          <div className={styles.infoModal}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h3>Info Panel</h3>
            <p>This is positioned near the button!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default InfoModal;
