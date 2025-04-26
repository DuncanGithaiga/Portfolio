import { section } from 'framer-motion/client'
import React, { useState, useEffect } from 'react';
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button className={styles.openButton} onClick={() => setShowModal(true)}>
          Show Info
        </button>
  
        {showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setShowModal(false)}>
                &times;
              </button>
              <h2>Information</h2>
              <p>This is a modal with some informative text inside. You can style this however you want!</p>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default InfoModal;
