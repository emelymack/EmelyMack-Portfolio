import { CardProject } from "./CardProject";
import conecta from '../../assets/img/proyecto-conecta.png'
import AFamily from '../../assets/img/proyecto-AFamily.png'
import aipsa from '../../assets/img/proyecto-aipsa.png'
import aipsaInstitucional from '../../assets/img/proyecto-aipsa-institucional.png'
import terra from '../../assets/img/proyecto-terra.png'
import elVencedor from '../../assets/img/proyecto-elVencedor.png'
import wolco from '../../assets/img/proyecto-wolco.png'
import rickYMorty from '../../assets/img/proyecto-rickYMorty.png'
import centroPokemon from '../../assets/img/proyecto-centroPokemon.png'
import { useAppSelector } from "../../hooks/hooks";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Project } from "../../types/types";

export const data = (language : string): Project[] => ([
  {
    img: aipsaInstitucional,
    title: `${(language === 'eng') ? 'Aipsa - Institutional web' : 'Aipsa - web institucional'}`,
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Aipsa' : 'Front End desarrollado para Axyoma Global & Aipsa'}`,
    webSrc: 'https://axyomadigital.com/proyectos/aipsa/institucional/'
  },
  {
    img: aipsa,
    title: 'Aipsa - Landing',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Aipsa' : 'Front End desarrollado para Axyoma Global & Aipsa'}`,
    webSrc: 'https://www.aipsa.com.ar/comex/'
  },
  {
    img: conecta,
    title: 'Conecta Live',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
    webSrc: 'https://axyomadigital.com/proyectos/conecta'
  },
  {
    img: terra,
    title: 'Terra',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Terra Comunicación' : 'Front End desarrollado para Axyoma Global & Terra Comunicación'}`,
    webSrc: 'https://terracomunicacion.com/'
  },
  // {
  //   img: AFamily,
  //   title: 'Anabel Family',
  //   description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
  //   webSrc: 'https://axyomadigital.com/proyectos/AFamily'
  // },
  {
    img: wolco,
    title: 'Wolco',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
    webSrc: 'https://axyomadigital.com/proyectos/wolco2/wolco/'
  },
  {
    img: elVencedor,
    title: 'El Vencedor - Rosarpin',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Rosarpin' : 'Front End desarrollado para Axyoma Global & Rosarpin'}`,
    webSrc: 'https://elvencedor.rosarpin.com/'
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
] )

export const Projects = () => {
  const language: string = useAppSelector(state => state.language)
  const title = (language === 'eng') ? 'Projects' : 'Proyectos'
  const subtitle =(language === 'eng') ? "Some of the work I've done" : 'Algunos de los proyectos en los que trabajé'
  const btnText = (language === 'eng') ? 'Load more' : 'Ver más'
  const [ endIndex, setEndIndex ] = useState(window.innerWidth >= 992 ? 6 : 3)
  const [ shownData, setShownData ] = useState<Project[]>([])

  useEffect(() => {
    const slicedData = data(language).slice(0, endIndex)
    setShownData(slicedData)
  }, [endIndex])

  const loadMore = () => {
    setEndIndex(endIndex + 3)
  }

  return (
    <div id="projects" className="container pt-5" data-aos="fade-up">
      <div className="text-center title">
        <h1 className="fw-bold text-center mb-3">{title}</h1>
        <span style={{fontSize: '18px'}}>{subtitle}</span>
      </div>
      <div className="row row-cols-1 row-cols-md-3 my-3 my-md-5 gy-4 justify-content-center">
        {shownData.map(project => (
          <CardProject key={project.title} img={project.img} title={project.title} description={project.description} webSrc={project.webSrc} gitHubSrc={project.gitHubSrc} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
          <Button className={`btn btn-secondary px-5 ${endIndex >= data(language).length && 'invisible'}`} onClick={() => loadMore()} >{btnText}!</Button>
        </div>
    </div>
  )
}