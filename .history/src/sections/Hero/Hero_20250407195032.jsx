import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpg'

function Hero() {
  return (
    <section id="hero">
     <div>
        <img src={heroImg} alt="" />
     </div>
    </section>
  )
}

export default Hero
