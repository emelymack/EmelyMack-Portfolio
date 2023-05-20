import { useAppSelector } from '../../hooks/hooks'
import { ContactForm } from './ContactForm'
import { ContactText } from './ContactText'

export const Contact = () => {
  const language: string = useAppSelector(state => state.language)

  const title = (language === 'eng') ? 'Contact' : 'Contacto'

  return (  
    <div id="contact" className="container pt-5" data-aos="fade-up">
      <div className="text-center">
        <h1 className="fw-bold text-center mb-0">{title}</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 my-3 mt-md-5 mb-md-0 gy-4">
        <div className="col d-flex flex-column">
          <ContactText />
        </div>
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}