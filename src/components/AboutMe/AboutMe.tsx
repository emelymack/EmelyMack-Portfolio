import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from '../../assets/css/AboutMe.module.scss'
import { Skills } from './Skills';
import { Strengths } from './Strengths';
import { Hobbies } from './Hobbies';
import { useAppSelector } from '../../hooks/hooks';
import { AboutMeTxt } from './AboutMeTxt';

export const AboutMe = () => {
  const language: string = useAppSelector(state => state.language)
  
  const title = (language === 'eng') ? 'About Me' : 'Sobre mí'

  return (
    <div id='aboutMe' className={`${style.aboutMe} container py-5`} data-aos="fade-up">
      <h1 className="secondary fw-bold text-center mb-5 title">{title}</h1>
      <AboutMeTxt />
      <div style={{width: '90%'}} className='mx-auto' data-aos="fade-up">
        <Tabs
          defaultActiveKey="skills"
          id="about-me-tabs"
          className={`mt-5 row row-cols-1 row-cols-lg-3 gx-0`}
        >
          <Tab eventKey="skills" title={(language === 'eng') ? 'Skills' : 'Conocimientos'} className={`${style.bg1} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg1}`}>
            <Skills />
          </Tab>
          <Tab eventKey="strengths" title={(language === 'eng') ? 'Strengths' : 'Aptitudes'} className={`${style.bg2} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg2}`} >
            <Strengths />
          </Tab>
          <Tab eventKey="hobbies" title={'Hobbies'} className={`${style.bg3} ${style.tabContent}`} tabClassName={`${style.tab} ${style.bg3}`}>
            <Hobbies />
          </Tab>
        </Tabs>
      </div>

    </div>
  )
}