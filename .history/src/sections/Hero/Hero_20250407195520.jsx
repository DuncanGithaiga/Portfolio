import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'

function Hero() {
  return (
    <section id="hero">
     <div className={styles.heroContainer}>
        <img className='' src={heroImg} alt="DG" />
        <img className='styles.colorMode' src={themeIcon} alt="Color mode" />
     </div>
    </section>
  )
}

export default Hero
