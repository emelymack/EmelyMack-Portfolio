import style from '../../assets/css/AboutMe.module.scss'
import { useAppSelector } from '../../hooks/hooks'

export const Strengths = () => {
  const lang: string = useAppSelector(state => state.language)

  return (
    
    <div className="container p-4 p-lg-5">
      <ul className={style.strengths}>
        {(lang === 'eng') ? 
          <>
            <li>Advanced English (C2), both spoken and written</li>
            <li>Basic Italian (B1)</li>
            <li>I am a very agile learner</li>
            <li>I enjoy working with and learning from other people</li>
            <li>Organization skills, very detail-oriented</li>
            <li>Excellent interpersonal skills. I am a helpful, responsible, reliable and empathic person, and a great listener</li>
            <li>Ability to learn from my own mistakes</li>
            <li>Natural leadership qualities</li>
            <li>I always strive to create websites that are beautiful, intuitive, visually appealing and responsive</li>
            <li>I am always eager to learn new skills and take on new challenges</li>
          </>
          : 
          <>
            <li>Inglés avanzado (C2), de forma oral y escrita</li>
            <li>Italiano básico (B1)</li>
            <li>Soy una aprendiz ágil</li>
            <li>Disfruto de trabajar en equipo y aprender de mis compañeros</li>
            <li>Habilidades de organización, detallista y observadora</li>
            <li>Excelentes aptitudes interpersonales. Me consideran una persona responsable, eficaz, confiable y empática</li>
            <li>Capacidad de aprender de los errores propios</li>
            <li>Aptitudes naturales de liderazgo</li>
            <li>Siempre me esfuerzo en crear páginas web que sean estéticamente bellas, intuitivas, visualmente atractivas y responsive</li>
            <li>Estoy siempre dispuesta a adquirir nuevos conocimientos y asumir nuevos desafíos</li>
          </>
        }
        
      </ul>
    </div>
  )
}