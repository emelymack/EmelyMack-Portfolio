import { CardProject } from "./CardProject";
import conecta from '../../assets/img/proyecto-conecta.png'
import AFamily from '../../assets/img/proyecto-AFamily.png'
import aipsa from '../../assets/img/proyecto-aipsa.png'
import wolco from '../../assets/img/proyecto-wolco.png'
import rickYMorty from '../../assets/img/proyecto-rickYMorty.png'
import centroPokemon from '../../assets/img/proyecto-centroPokemon.png'
import { useAppSelector } from "../../hooks/hooks";


export const Projects = () => {
  const language: string = useAppSelector(state => state.language)

  const data = [
    {
      img: conecta,
      title: 'Conecta Live',
      description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
      webSrc: 'https://axyomadigital.com/proyectos/conecta'
    },
    {
      img: AFamily,
      title: 'Anabel Family',
      description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
      webSrc: 'https://axyomadigital.com/proyectos/AFamily'
    },
    {
      img: aipsa,
      title: 'Aipsa',
      description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
      webSrc: 'https://www.aipsa.com.ar/comex/'
    },
    {
      img: wolco,
      title: 'Wolco',
      description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
      webSrc: 'https://axyomadigital.com/proyectos/wolco2/wolco/'
    },
    {
      img: rickYMorty,
      title: `${(language === 'eng') ? 'Rick & Morty Project' : 'Proyecto Rick y Morty'}`,
      description: `${(language === 'eng') ? 'Final project for the subject Front End IV. Built with React, TypeScript and Redux' : 'Proyecto final para la materia Front End IV. Desarrollado con React, TypeScript y Redux'}`,
      webSrc: 'https://rickmortyapp-project.netlify.app',
      gitHubSrc: 'https://github.com/emelymack/ctd-esp-fe1-final'
    },
    {
      img: centroPokemon,
      title: `${(language === 'eng') ? 'Pokemon Center Project' : 'Proyecto Centro Pokemon'}`,
      description: `${(language === 'eng') ? 'Project for the subject Front End IV. Built with React, TypeScript and Redux' : 'Proyecto para la materia Front End IV. Desarrollado con React, TypeScript y Redux'}`,
      webSrc: 'https://centropokemon-redux-typescript.netlify.app',
      gitHubSrc: 'https://github.com/emelymack/ejercicio-redux-1'
    }
  ]
  
  const title = (language === 'eng') ? 'Projects' : 'Proyectos'
  const subtitle =(language === 'eng') ? "Some of the work I've done" : 'Algunos de los proyectos en los que trabajé'
  return (
    <div id="projects" className="container pt-5" data-aos="fade-up">
      <div className="text-center title">
        <h1 className="fw-bold text-center mb-3">{title}</h1>
        <span style={{fontSize: '18px'}}>{subtitle}</span>
      </div>
      <div className="row row-cols-1 row-cols-md-3 my-3 my-md-5 gy-4">
        {data.map(project => (
          <CardProject key={project.title} img={project.img} title={project.title} description={project.description} webSrc={project.webSrc} gitHubSrc={project.gitHubSrc} />
        ))}
      </div>
    </div>
  )
}