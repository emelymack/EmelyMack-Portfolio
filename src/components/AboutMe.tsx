import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from '../assets/css/AboutMe.module.scss'
import { Skills } from './Skills';
import { Strengths } from './Strengths';
import { Hobbies } from './Hobbies';

export const AboutMe = () => {
  return (
    <div id='aboutMe' className="container py-5" data-aos="fade-up">
      <h1 className="highlight fw-bold text-center mb-4">About Me</h1>
      <div className='text-center text-lg-start'>
        <p>I am a <span className='fw-bold secondary'>Front-End Web Developer</span> whose goal is to create beautiful, functional, efficient user-centered websites.</p>
        <p className='mb-1'>I am coursing my final year of the Certified Tech Developer programme, developed by Digital House in collaboration with companies Mercado Libre and Globant with the aim of training young professionals from Latin America to met the highest standards in the industry.</p>
        <p>I'm also working as a Front End dev in a marketing agency and currently looking to expand my knowledge and experience in the IT world. Check out some of my work in the <a href="./#projects" className='fw-bold secondary'>Projects</a> section!</p>
        <p>I am open to <span className='fw-bold secondary'>job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to <a href="./#contact" className='fw-bold secondary'>contact me</a>.</p>
      </div>

      <Tabs
        defaultActiveKey="skills"
        id="about-me-tabs"
        className={`mt-5 justify-content-between flex-column flex-lg-row`}
      >
        <Tab eventKey="skills" title="Skills" className={`${style.bg1} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg1}`}>
          <Skills />
        </Tab>
        <Tab eventKey="strengths" title="Strengths" className={`${style.bg2} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg2}`} >
          <Strengths />
        </Tab>
        <Tab eventKey="hobbies" title="Hobbies" className={`${style.bg3} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg3}`}>
          <Hobbies />
        </Tab>
      </Tabs>
    </div>
  )
}