import style from '../../assets/css/AboutMe.module.scss'
import meditation from '../../assets/img/meditation.svg'
import cat from '../../assets/img/cat-friends.svg'
import music from '../../assets/img/music.svg'
import { YoutubeEmbed } from './YoutubeEmbed'
import { useAppSelector } from '../../hooks/hooks'

export const Hobbies = () => {
  const lang: string = useAppSelector(state => state.language)

  const message = {
      part1: `${(lang === 'eng') ? "You're more than welcome to take a look at my Youtube video singing Love on the Brain by Rihanna" : 'Te invito a ver mi video de Youtube cantando Love on the Brain, de Rihanna'}`,
      part2: `${(lang === 'eng') ? "Hope you enjoy it" : '¡Espero que lo disfrutes'}`,
    }
  return (
    <div className={`${style.hobbiesContainer} container px-4 py-5 p-lg-5`}>
      <img className={`${style.bgImg} ${style.bgImg1}`} src={meditation} alt="Meditate" />
      <img className={`${style.bgImg} ${style.bgImg2}`} src={cat} alt="Spending time with my cats" />
      <img className={`${style.bgImg} ${style.bgImg3}`} src={music} alt="Singing and dancing" />
      <div className='d-flex flex-column align-items-center mt-5 mb-4'>
        <div style={{zIndex: 5}}>
          <YoutubeEmbed embedId='1kp8xcaKvsA' classes='mb-2' />
          <span className='small'>
          {message.part1}💜<br/>
          {message.part2}!</span>
        </div>
        
      </div>
    </div>
  )
}