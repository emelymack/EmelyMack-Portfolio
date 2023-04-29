import { Link } from 'react-router-dom'
import style from '../assets/css/Footer.module.scss'
import logo from '../assets/img/logo-white.png'
import github from '../assets/img/github-white.svg'
import mail from '../assets/img/mail.svg'
import linkedin from '../assets/img/linkedin-white.svg'

export const Footer = () => (
  <div className={style.footer}>
    <div className="container d-flex flex-column align-items-center py-5 text-white">
      <Link to={'/'}><img src={logo} width={220} alt="Emely Mack - Front End Developer" /></Link>
      <span className='agradecimiento mt-4 fst-italic'>Bringing your vision to life, one pixel at a time</span>
      <div className="w-25 d-flex align-items-center justify-content-between mt-5">
        <a href='https://www.github.com/emelymack' target='_blank'><img src={github} className={style.icon} /></a>
        <a href='mailto:emelymackdev@gmail.com'><img src={mail} className={style.icon} /></a>
        <a href='https://www.linkedin.com/in/emelymack' target='_blank'><img src={linkedin} className={style.icon} /></a>
      </div>
    </div>
  </div>
)