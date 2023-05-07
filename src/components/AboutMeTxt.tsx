import { useAppSelector } from "../hooks/hooks"

export const AboutMeTxt = () => {
  const language: string = useAppSelector(state => state.language)

  return(
    <>
      {(language === 'eng') ? 
      <div className='row row-cols-1 row-cols-md-2 px-2 px-lg-0 mx-md-5'>
        <div className="col">
          <p>I am a <span className='fw-bold highlight'>Front-End Web Developer</span> whose goal is to create beautiful, functional and efficient user-centered websites.</p>
          <p className='mb-1'>Currently, I'm in my final year of the Certified Tech Developer program, developed by Digital House in collaboration with Mercado Libre and Globant to train young professionals to meet the highest standards in the industry.</p>
          <p>In addition, I'm also working as a Front End Developer at a marketing agency and am currently looking to expand my knowledge and experience in the IT world. Check out some of my work in the <a href="./#projects" className='fw-bold'>Projects</a> section!</p>
        </div>
        <div className="col">
          <p className='mb-1'>My passion for programming and design is reflectes in every project I undertake, where every line of code and every pixel serves a purpose. If you're looking for a website that speaks about you or your business and stands for its beauty, <span className='fw-bold highlight'>I am here to help you make it real</span>.</p>
          <p>I am open to new job opportunities where I can contribute, learn and grow. If you think I would be a good fit for an opportunity that matches my skills and experience, please don't hesitate to <a href="./#contact" className='fw-bold'>contact me</a>.</p>
        </div>
      </div>
      :
      <div className='row row-cols-1 row-cols-md-2 px-2 px-lg-0 mx-md-5'>
        <div className="col">
          <p>Soy una <span className='fw-bold highlight'>Desarrolladora Web Front-End</span> apasionada por crear sitios web atractivos, funcionales y adaptables a cualquier objetivo, con el objetivo de brindarte la mejor experiencia como usuario.</p>
          <p className='mb-1'>Este 2023 me encuentro cursando mi último año de la carrera Certified Tech Developer, creada por Digital House en colaboración con Mercado Libre y Globant.</p>
          <p>Además, estoy trabajando como desarrolladora Front-End en una agencia de marketing y actualmente busco ampliar mi conocimiento y experiencia en el mundo IT. ¡Te invito a ver algunos de mis trabajos en la sección de <a href="./#projects" className='fw-bold'>Proyectos</a>!</p>
        </div>
        <div className="col">
          <p className='mb-1'>Mi pasión por la programación y el diseño se refleja en cada proyecto que realizo, donde cada línea de código y cada píxel tienen un propósito. Si buscas un sitio web que hable de ti o de tu negocio, y que destaque por su belleza y usabilidad, <span className='fw-bold highlight'>estoy acá para ayudarte a hacerlo realidad</span>.</p>
          <p>Estoy abierta a nuevas oportunidades en las que pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en <a href="./#contact" className='fw-bold'>contactarme</a>.</p>
        </div>
      </div>
      }
    </>
  )
}