import { section } from 'framer-motion/client'
import React, { useState, useEffect } from 'react';
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className={styles.imageContainer}>
        <img src={sampleImage} alt="Decorative" />
  
        <button
          className={styles.overlayButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          ℹ️
        </button>
  
        {isOpen && (
          <div className={styles.infoModal}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h3>About This Image</h3>
            <p>This modal appears right next to the image button!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default InfoModal;
