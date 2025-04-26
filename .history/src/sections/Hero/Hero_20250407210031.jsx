import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero">
     <div className={styles.heroContainer}>
        <img className='' src={heroImg} alt="DG" />
        <img className='styles.colorMode' src={themeIcon} alt="Color mode" onClick={toggleTheme}/>
        <div className={styles.info}>
            <h1>DG</h1>
            <h2>Software Engineer</h2>
            <span>
            <a href="https://twitter.com/">
             <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://github.com/">
             <img src={githubIcon} alt="github" />
            </a>
            <a href="https://linkedin.com/">
             <img src={linkedinIcon} alt="linkedin" />
            </a>
            <p className={styles.description}>Create your world with DG </p>
            <a href={CV} download>
                <button className="hover">Download CV</button>
            </a>
            </span>
        </div>
     </div>
    </section>
  )
}

export default Hero
