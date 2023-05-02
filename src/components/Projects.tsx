import { CardProject } from "./CardProject";
import conecta from '../assets/img/proyecto-conecta.png'
import AFamily from '../assets/img/proyecto-AFamily.png'
import aipsa from '../assets/img/proyecto-aipsa.png'
import wolco from '../assets/img/proyecto-wolco.png'
import rickYMorty from '../assets/img/proyecto-rickYMorty.png'
import centroPokemon from '../assets/img/proyecto-centroPokemon.png'

export const Projects = () => (
  <div id="projects" className="container pt-5">
    <div className="text-center">
      <h1 className="highlight fw-bold text-center mb-3">Projects</h1>
      <span className="secondary" style={{fontSize: '18px'}}>Some of the work I've done</span>
    </div>
    <div className="row row-cols-1 row-cols-md-3 my-3 my-md-5 gy-4">
      <CardProject img={conecta} title="Conecta Live" description="Front End developed for Axyoma Global" webSrc="https://axyomadigital.com/proyectos/conecta" />
      <CardProject img={AFamily} title="Anabel Family" description="Front End developed for Axyoma Global" webSrc="https://axyomadigital.com/proyectos/AFamily" />
      <CardProject img={aipsa} title="Aipsa" description="Front End developed for Axyoma Global" webSrc="https://axyomadigital.com/proyectos/Aipsa/landing" />
      <CardProject img={wolco} title="Wolco" description="Front End developed for Axyoma Global" webSrc="https://axyomadigital.com/proyectos/wolco2/wolco/" />
      <CardProject img={rickYMorty} title="Rick & Morty Project" description="Final project for the subject Front End IV. Built with React, TypeScript and Redux" webSrc="https://rickmortyapp-project.netlify.app/" />
      <CardProject img={centroPokemon} title="Pokemon Center Project" description="Project for the subject Front End IV. Built with React, TypeScript and Redux" webSrc="https://centropokemon-redux-typescript.netlify.app/" />
    </div>
  </div>
)