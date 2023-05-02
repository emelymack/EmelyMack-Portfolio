import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import argentinaFlag from '../assets/img/argentina-flag.png';
// @ts-ignore
import cv from '../assets/files/MackEmely-FrontEndDeveloper.pdf';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import style from '../assets/css/Header.module.scss'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className={style.navbar}>
      <Container className=''>
        <Navbar.Brand href="#" className={style.navbarBrand}>
          <img src={logo} alt="Emely Mack - Front End Developer" className={style.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end w-100'>
          <Nav className={`d-flex align-items-center justify-content-between  ${style.nav}`}>
            <Nav.Link className={style.navLink} href="#aboutMe">About me</Nav.Link>
            <Nav.Link className={style.navLink} href="#projects">Projects</Nav.Link>
            <Nav.Link className={style.navLink} href="#contact">Contact</Nav.Link>
            <Nav.Link className={style.navLink} href={cv} download="MackEmely-FrontEndDeveloper.pdf"><Button variant="outline-secondary" className='btn-outline px-3'>
              <FontAwesomeIcon icon={faDownload} className='me-1' /> Download CV</Button>
            </Nav.Link>
            <Link to={'spanish'} className='py-2'><img src={argentinaFlag} width={60} alt="Change language to Spanish" className={style.languageBtn} /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}