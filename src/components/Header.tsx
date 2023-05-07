import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// @ts-ignore
import cv from '../assets/files/MackEmely-FrontEndDeveloper.pdf';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import style from '../assets/css/Header.module.scss'
import { LanguageBtn } from './LanguageBtn';
import { useAppSelector } from '../hooks/hooks';
import { scrollState } from '../redux/scrollingSlice';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export const Header = () => {
  const lang: string = useAppSelector(state => state.language)
  const scroll: scrollState = useAppSelector(state => state.scrolling)

  return (
    <Navbar id="navbar" expand="lg" className={`py-1 ${scroll.navbarClass} ${style.navbar}`}>
      <Container className=''>
        <Navbar.Brand href="#" className={style.navbarBrand}>
          <img id='logo' src={scroll.logoSrc} alt="Emely Mack - Front End Developer" className={`logo ${style.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={style.navbarToggle}>
          <FontAwesomeIcon icon={faEllipsis} size={scroll.menuSize as SizeProp} style={{color: scroll.menuColor}} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end w-100'>
          <Nav className={`d-flex align-items-center justify-content-between  ${style.nav}`}>
            <Nav.Link className={style.navLink} href="#aboutMe">{(lang === 'eng') ? 'About me' : 'Sobre mí'}</Nav.Link>
            <Nav.Link className={style.navLink} href="#projects">{(lang === 'eng') ? 'Projects' : 'Proyectos'}</Nav.Link>
            <Nav.Link className={style.navLink} href="#contact">{(lang === 'eng') ? 'Contact' : 'Contacto'}</Nav.Link>
            <a className={style.navLink} href={cv} download="MackEmely-FrontEndDeveloper.pdf"><Button variant="outline-secondary" className={`${scroll.btnHeaderClass} btn-header px-3`}>
              <FontAwesomeIcon icon={faDownload} className='me-1' /> {(lang === 'eng') ? 'Download CV' : 'Descargar CV'}</Button>
            </a>
            <LanguageBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}