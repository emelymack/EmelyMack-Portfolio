import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
// @ts-ignore
import cv from '../assets/files/MackEmely-FrontEndDeveloper.pdf';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import style from '../assets/css/Header.module.scss'
import { LanguageBtn } from './LanguageBtn';
import { useAppSelector } from '../hooks/hooks';

export const Header = () => {
  const lang: string = useAppSelector(state => state.language)
  return (
    <Navbar bg="light" expand="lg" className={style.navbar}>
      <Container className=''>
        <Navbar.Brand href="#" className={style.navbarBrand}>
          <img src={logo} alt="Emely Mack - Front End Developer" className={style.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end w-100'>
          <Nav className={`d-flex align-items-center justify-content-between  ${style.nav}`}>
            <Nav.Link className={style.navLink} href="#aboutMe">{(lang === 'eng') ? 'About me' : 'Sobre mí'}</Nav.Link>
            <Nav.Link className={style.navLink} href="#projects">{(lang === 'eng') ? 'Projects' : 'Proyectos'}</Nav.Link>
            <Nav.Link className={style.navLink} href="#contact">{(lang === 'eng') ? 'Contact' : 'Contacto'}</Nav.Link>
            <Nav.Link className={style.navLink} href={cv} download="MackEmely-FrontEndDeveloper.pdf"><Button variant="outline-secondary" className='btn-outline px-3'>
              <FontAwesomeIcon icon={faDownload} className='me-1' /> {(lang === 'eng') ? 'Download CV' : 'Descargar CV'}</Button>
            </Nav.Link>
            <LanguageBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}