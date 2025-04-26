import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twittertIcon from '../../assets/twitter-dark.svg'
import githubIcon from '../../assets/github-dark.svg'
import linkedinIcon from '../../assets/linkedin-dark.svg'
import instagramIcon from '../../assets/'

function Hero() {
  return (
    <section id="hero">
     <div className={styles.heroContainer}>
        <img className='' src={heroImg} alt="DG" />
        <img className='styles.colorMode' src={themeIcon} alt="Color mode" />
        <div>
            <h1>DG</h1>
            <h2>Software Engineer</h2>
            <span>
            <a href="https://twitter.com/">
             <img src="" alt="" />
            </a>
            <a href="https://github.com/">
             <img src="" alt="" />
            </a>
            <a href="https://linkedin.com/">
             <img src="" alt="" />
            </a>
            </span>
        </div>
     </div>
    </section>
  )
}

export default Hero
