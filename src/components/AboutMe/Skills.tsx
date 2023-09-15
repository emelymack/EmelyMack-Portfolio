import style from '../../assets/css/AboutMe.module.scss'
import htmlLogo from '../../assets/img/logos/html.png'
import cssLogo from '../../assets/img/logos/css.png'
import javascriptLogo from '../../assets/img/logos/javascript.png'
import reactLogo from '../../assets/img/logos/react.png'
import gitLogo from '../../assets/img/logos/git.png'
import gitlabLogo from '../../assets/img/logos/gitlab.png'
import typescriptLogo from '../../assets/img/logos/typescript.svg'
import nextjsLogo from '../../assets/img/logos/nextjs.svg'
import vercelLogo from '../../assets/img/logos/vercel.svg'
import materialUILogo from '../../assets/img/logos/materialUI.png'
import jiraLogo from '../../assets/img/logos/jira.png'
import bootstrapLogo from '../../assets/img/logos/bootstrap.png'
import sassLogo from '../../assets/img/logos/sass.png'
import apiRestLogo from '../../assets/img/logos/restApi.png'
import mysqlLogo from '../../assets/img/logos/mysql.png'
import nodejsLogo from '../../assets/img/logos/nodejs.png'
import postmanLogo from '../../assets/img/logos/postman.webp'
import javaLogo from '../../assets/img/logos/java.png'
import reduxLogo from '../../assets/img/logos/redux.png'
import figmaLogo from '../../assets/img/logos/figma.png'
import adobexdLogo from '../../assets/img/logos/adobexd.png'
import agileLogo from '../../assets/img/logos/agile.png'
import awsLogo from '../../assets/img/logos/aws.png'
import wordpressLogo from '../../assets/img/logos/wordpress.png'

export const Skills = () => (
  <div className="container px-3 py-5 p-lg-5">
    <div className="row row-cols-3 row-cols-lg-5 justify-content-center gx-0 gy-4 p-lg-4">
      <div className={`col ${style.skillsCol}`}>
        <img src={htmlLogo} alt="HTML" width={100} className='mb-2' />
        HTML
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={cssLogo} alt="CSS" width={75} className='mb-2' />
        CSS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={javascriptLogo} alt="JavaScript" height={85} className='mb-3' style={{borderRadius: '10px'}} />
        JavaScript
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={typescriptLogo} alt="TypeScript" width={85} className='mb-3' />
        TypeScript
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={reactLogo} alt="React" width={85} className='mb-3' />
        React
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={nextjsLogo} alt="NextJS" width={85} className='mb-3' />
        NextJS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={reduxLogo} alt="Redux" width={125} className='mb-1' />
        Redux
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={bootstrapLogo} alt="Bootstrap" width={95} className='mb-4' />
        Bootstrap
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={materialUILogo} alt="MaterialUI" width={95} className='mb-4' />
        MaterialUI
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={sassLogo} alt="Sass" width={105} className='mb-3' />
        Sass
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={gitLogo} alt="Git" width={85} className='mb-3' />
        Git
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={gitlabLogo} alt="GitLab" width={85} className='mb-3' />
        GitLab
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={vercelLogo} alt="Vercel" width={85} className='mb-3' />
        Vercel
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={mysqlLogo} alt="MySQL" width={125} className='mb-4' />
        MySQL
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={nodejsLogo} alt="Node JS" width={105} className='mb-3' />
        Node JS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={apiRestLogo} alt="RESTful API" width={105} className='mb-3' />
        RESTful API
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={postmanLogo} alt="Postman" width={75} className='mb-2' />
        Postman
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={javaLogo} alt="Java" width={75} className='mb-2' />
        Java
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={figmaLogo} alt="Figma" width={85} className='mt-2 mb-4' />
        Figma
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={adobexdLogo} alt="AdobeXD" width={75} className='mb-3' />
        AdobeXD
      </div>
      <div className={`col ${style.skillsCol} text-center`}>
        <img src={agileLogo} alt="Agile Methodologies" width={75} className='mb-2' />
        Agile Methodologies
      </div>
      <div className={`col ${style.skillsCol} text-center`}>
        <img src={jiraLogo} alt="Jira" width={140} className='mb-3' />
        Jira
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={awsLogo} alt="AWS" width={100} className='mb-2' />
        AWS
      </div>
      <div className={`col ${style.skillsCol}`}>
        <img src={wordpressLogo} alt="AWS" width={90} className='mb-3' />
        WordPress
      </div>
    </div>
  </div>
)