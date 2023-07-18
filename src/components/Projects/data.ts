import conecta from '../../assets/img/proyecto-conecta.png'
import AFamily from '../../assets/img/proyecto-AFamily.png'
import aipsa from '../../assets/img/proyecto-aipsa.png'
import aipsaInstitucional from '../../assets/img/proyecto-aipsa-institucional.png'
import terra from '../../assets/img/proyecto-terra.png'
import elVencedor from '../../assets/img/proyecto-elVencedor.png'
import wolco from '../../assets/img/proyecto-wolco.png'
import rickYMorty from '../../assets/img/proyecto-rickYMorty.png'
import centroPokemon from '../../assets/img/proyecto-centroPokemon.png'
import pruebaTecnica from '../../assets/img/proyecto-pruebaTecnica.png'
import { Project, projectCategory } from '../../types/types'

export const data = (language : string): Project[] => ([
  {
    img: aipsaInstitucional,
    title: `${(language === 'eng') ? 'Aipsa - Institutional web' : 'Aipsa - web institucional'}`,
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Aipsa' : 'Front End desarrollado para Axyoma Global & Aipsa'}`,
    webSrc: 'https://axyomadigital.com/proyectos/aipsa/institucional/',
    category: projectCategory.Work
  },
  {
    img: aipsa,
    title: 'Aipsa - Landing',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Aipsa' : 'Front End desarrollado para Axyoma Global & Aipsa'}`,
    webSrc: 'https://www.aipsa.com.ar/comex/',
    category: projectCategory.Work
  },
  {
    img: conecta,
    title: 'Conecta Live',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global' : 'Front End desarrollado para Axyoma Global'}`,
    webSrc: 'https://axyomadigital.com/proyectos/conecta',
    category: projectCategory.Work
  },
  {
    img: terra,
    title: 'Terra',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Terra Comunicación' : 'Front End desarrollado para Axyoma Global & Terra Comunicación'}`,
    webSrc: 'https://terracomunicacion.com/',
    category: projectCategory.Work
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
    webSrc: 'https://axyomadigital.com/proyectos/wolco2/wolco/',
    category: projectCategory.Work
  },
  {
    img: elVencedor,
    title: 'El Vencedor - Rosarpin',
    description: `${(language === 'eng') ? 'Front End developed for Axyoma Global & Rosarpin' : 'Front End desarrollado para Axyoma Global & Rosarpin'}`,
    webSrc: 'https://elvencedor.rosarpin.com/',
    category: projectCategory.Work
  },
  {
    img: rickYMorty,
    title: `${(language === 'eng') ? 'Rick & Morty Project' : 'Proyecto Rick y Morty'}`,
    description: `${(language === 'eng') ? 'Final project for the subject Front End IV. Built with React, TypeScript and Redux' : 'Proyecto final para la materia Front End IV. Desarrollado con React, TypeScript y Redux'}`,
    webSrc: 'https://rickmortyapp-project.netlify.app',
    gitHubSrc: 'https://github.com/emelymack/ctd-esp-fe1-final',
    category: projectCategory.Personal
  },
  {
    img: centroPokemon,
    title: `${(language === 'eng') ? 'Pokemon Center Project' : 'Proyecto Centro Pokemon'}`,
    description: `${(language === 'eng') ? 'Project for the subject Front End IV. Built with React, TypeScript and Redux' : 'Proyecto para la materia Front End IV. Desarrollado con React, TypeScript y Redux'}`,
    webSrc: 'https://centropokemon-redux-typescript.netlify.app',
    gitHubSrc: 'https://github.com/emelymack/ejercicio-redux-1',
    category: projectCategory.Personal
  },
  {
    img: pruebaTecnica,
    title: `${(language === 'eng') ? 'Technical Test' : 'Prueba Técnica'}`,
    description: `${(language === 'eng') ? 'Technical test project for a 55000 €/year job position at a European company. Built with React, TypeScript, React Query & Styled Components' : 'Prueba técnica de una empresa europea para un sueldo de 55000 €/anuales, realizada con React, TypeScript, React Query & Styled Components'}`,
    webSrc: 'https://64b5b81eb4930908c3d41d27--randomusers-react-typescript.netlify.app/',
    gitHubSrc: 'https://github.com/emelymack/prueba-tecnica-React-TS-ReactQuery',
    category: projectCategory.Personal
  }
] )