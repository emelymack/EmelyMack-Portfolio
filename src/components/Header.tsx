import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-blue.png';
import argentinaFlag from '../assets/img/argentina-flag.png';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import style from '../assets/css/Header.module.scss'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Emely Mack - Front End Developer" width={'60%'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
          <Nav className="w-75 d-flex align-items-center justify-content-around">
            <Nav.Link className={style.navLink} href="#aboutMe">About me</Nav.Link>
            <Nav.Link className={style.navLink} href="#projects">Projects</Nav.Link>
            <Nav.Link className={style.navLink} href="#contact">Contact</Nav.Link>
            <Nav.Link className={style.navLink} href="#"><Button variant="outline-secondary" className='btn-secondary px-3'>
              <FontAwesomeIcon icon={faDownload} className='me-1' /> Download CV</Button>
              </Nav.Link>
            <Link to={'spanish'}><img src={argentinaFlag} width={60} alt="Change language to Spanish" className={style.languageBtn} /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}