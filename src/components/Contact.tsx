import github from '../assets/img/github-secondary.svg'
import linkedin from '../assets/img/linkedin-secondary.svg'
import mail from '../assets/img/mail-secondary.svg'
import githubHighlight from '../assets/img/github-highlight.svg'
import linkedinHighlight from '../assets/img/linkedin-highlight.svg'
import mailHighlight from '../assets/img/mail-highlight.svg'
import style from '../assets/css/Contact.module.scss'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export const Contact = () => {
  const [ iconsState, setIconsState ] = useState<any>({
    iconGitHub: github,
    iconLinkedIn: linkedin,
    iconMail: mail
  })

  useEffect(() => {
  }, [iconsState])
  
  return (  
    <div id="contact" className="container pt-5">
      <div className="text-center">
        <h1 className="highlight fw-bold text-center mb-0">Contact</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 my-3 mt-md-5 mb-md-0 gy-4">
        <div className="col d-flex flex-column">
          <h2 className='secondary fw-semibold text-center text-md-start'>Let's work together!</h2>
          <div className="d-flex flex-column align-items-center align-items-md-start ms-md-5">
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
        </div>
        <div className="col">
          <div className={style.formContainer}>
            <Form className={style.form}>
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label className={style.label}>Name / Company</Form.Label>
                <Form.Control type="text" placeholder="Name / Company" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label className={style.label}>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label className={style.label}>Message</Form.Label>
                <Form.Control as="textarea" aria-label="Message" placeholder="Your message..." rows={5}/>
              </Form.Group>
              <div className='d-flex justify-content-center justify-content-lg-end'>
                <Button className='btn-secondary px-5 py-2' type="submit">
                  Submit
                </Button>
              </div>
              
            </Form>
          </div>
          
        </div>
      </div>
    </div>
  )
}