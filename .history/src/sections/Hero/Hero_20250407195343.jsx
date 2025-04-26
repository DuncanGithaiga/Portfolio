import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'

function Hero() {
  return (
    <section id="hero">
     <div className={styles.heroContainer}>
        <img className='' src={heroImg} alt="DG" />
     </div>
    </section>
  )
}

export default Hero
