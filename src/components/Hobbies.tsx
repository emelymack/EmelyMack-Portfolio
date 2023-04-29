import style from '../assets/css/AboutMe.module.scss'
import meditation from '../assets/img/meditation.svg'
import cat from '../assets/img/cat-friends.svg'
import music from '../assets/img/music.svg'
import { YoutubeEmbed } from './YoutubeEmbed'

export const Hobbies = () => (
  <div className={`${style.hobbiesContainer} container px-4 py-5 p-lg-5`}>
    <img className={`${style.bgImg} ${style.bgImg1}`} src={meditation} alt="Meditate" />
    <img className={`${style.bgImg} ${style.bgImg2}`} src={cat} alt="Spending time with my cats" />
    <img className={`${style.bgImg} ${style.bgImg3}`} src={music} alt="Singing and dancing" />
    <div className='d-flex flex-column align-items-center mt-5 mb-4'>
      <div style={{zIndex: 5}}>
        <YoutubeEmbed embedId='1kp8xcaKvsA' classes='mb-2' />
        <span className='small secondary'>You're more than welcome to take a look at my Youtube video singing Love on the Brain by Rihanna💜<br/>
        Hope you like it!</span>
      </div>
      
    </div>
  </div>
)