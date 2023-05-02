import style from '../assets/css/Contact.module.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface FormInputs {
  from_name: string,
  from_email: string,
  message: string
}
export const ContactForm = () => {
  const form = useRef<any>()
  const [ formState, setFormState ] = useState<FormInputs>({
    from_name: '',
    from_email: '',
    message: ''
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({...formState, [e.target.id]: [e.target.value]})
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_wtjf6qd', 'template_phd8t5p', form.current, 'qcw58On-6ljhy2Ntn')
      .then((result) => {
        MySwal.fire({
          title: 'Email sent successfully!',
          html: <p className='small'>Thank you for taking your time, <br/>I'll be getting in touch with you soon :)</p>,
          icon: 'success',
          timer: 3500,
          showClass: {
            popup: 'animate__animated animate__bounceIn'
          },
        })
        console.log(result.text);
      }, (error) => {
        MySwal.fire({
          title: 'Oh no, there was an error',
          html: <p className='small'>Try again later, thanks!</p>,
          icon: 'error',
          timer: 3500,
          showClass: {
            popup: 'animate__animated animate__bounceIn'
          },
        })
        console.log(error.text);
      })
      .then(() => form.current.reset())
  };

  return (
    <div className={style.formContainer}>
      <Form className={style.form} ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="from_name">
          <Form.Label className={style.label}>Name / Company</Form.Label>
          <Form.Control type="text" placeholder="Full name / Company" name="from_name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handleInputChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="from_email">
          <Form.Label className={style.label}>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="from_email" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handleInputChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label className={style.label}>Message</Form.Label>
          <Form.Control as="textarea" aria-label="Message" name="message" placeholder="Your message..." rows={5} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handleInputChange(e)}/>
        </Form.Group>
        <div className='d-flex justify-content-center justify-content-lg-end'>
        <Button className='btn-secondary px-5 py-2' type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  )
}