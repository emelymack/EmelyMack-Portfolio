import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from '../assets/css/AboutMe.module.scss'
import { Skills } from './Skills';
import { Strengths } from './Strengths';
import { Hobbies } from './Hobbies';

export const AboutMe = () => (
  <div id='aboutMe' className="container py-5">
    <h1 className="highlight fw-bold text-center">ABOUT ME</h1>
    <Tabs
      defaultActiveKey="hobbies"
      id="about-me-tabs"
      className={`mt-5 justify-content-between`}
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