import style from '../assets/css/Contact.module.scss'
import { useEffect, useState } from "react"
import github from '../assets/img/github-secondary.svg'
import linkedin from '../assets/img/linkedin-secondary.svg'
import mail from '../assets/img/mail-secondary.svg'
import githubHighlight from '../assets/img/github-highlight.svg'
import linkedinHighlight from '../assets/img/linkedin-highlight.svg'
import mailHighlight from '../assets/img/mail-highlight.svg'

export const ContactText = () => {
  const [ iconsState, setIconsState ] = useState<any>({
    iconGitHub: github,
    iconLinkedIn: linkedin,
    iconMail: mail
  })

  useEffect(() => {
  }, [iconsState])

  return (
    <>
      <h2 className='secondary fw-semibold text-center text-md-start'>Let's work together!</h2>
      <div className="d-flex flex-column align-items-center align-items-md-start ms-lg-5">
        <div>
          <a href='https://www.github.com/emelymack' target='_blank' className={style.contactLinks} onMouseOver={() => setIconsState({...iconsState, iconGitHub: githubHighlight})} onMouseLeave={() => setIconsState({...iconsState, iconGitHub: github})}>
            <img src={iconsState.iconGitHub} className={`contactIcon ${style.icon}`}  />
            github.com/emelymack
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/emelymack' target='_blank' className={style.contactLinks} onMouseOver={() => setIconsState({...iconsState, iconLinkedIn: linkedinHighlight})} onMouseLeave={() => setIconsState({...iconsState, iconLinkedIn: linkedin})}>
            <img src={iconsState.iconLinkedIn} className={`contactIcon ${style.icon}`} />
            linkedin.com/in/emelymack
          </a>
        </div>
        <div>
          <a href='mailto:emelymackdev@gmail.com' className={style.contactLinks} onMouseOver={() => setIconsState({...iconsState, iconMail: mailHighlight})} onMouseLeave={() => setIconsState({...iconsState, iconMail: mail})}>
            <img src={iconsState.iconMail} className={`contactIcon ${style.icon}`} />
            emelymackdev@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}