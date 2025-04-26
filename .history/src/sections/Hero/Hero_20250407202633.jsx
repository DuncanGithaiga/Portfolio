import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twittertIcon from '../../assets/twitter-dark.svg'
import githubIcon from '../../assets/github-dark.svg'
import linkedinIcon from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon.svg;
  return (
    <section id="hero">
     <div className={styles.heroContainer}>
        <img className='' src={heroImg} alt="DG" />
        <img className='styles.colorMode' src={themeIcon} alt="Color mode" onClick={toggleTheme}/>
        <div>
            <h1>DG</h1>
            <h2>Software Engineer</h2>
            <span>
            <a href="https://twitter.com/">
             <img src={twittertIcon} alt="twitter" />
            </a>
            <a href="https://github.com/">
             <img src={githubIcon} alt="github" />
            </a>
            <a href="https://linkedin.com/">
             <img src={linkedinIcon} alt="linkedin" />
            </a>
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
