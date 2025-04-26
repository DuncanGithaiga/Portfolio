import { section } from 'framer-motion/client'
import React from 'react'
import styles from './InfoModalStyles.module.css'

function InfoModal() {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className={styles.infoModal} id="infoModal">
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
    </section>
  )
}

export default InfoModal
