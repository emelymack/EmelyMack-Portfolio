import style from '../assets/css/AboutMe.module.scss'
import meditation from '../assets/img/meditation.svg'
import cat from '../assets/img/cat-friends.svg'
import music from '../assets/img/music.svg'

export const Hobbies = () => (
  <div className="container p-5">
    <p>In my free time I like to take time to myself, my friends and family, and especially to clear up my head doing my favourite hobbies:</p>
    <div className="row row-cols-2">
      <div className="col d-flex align-items-center justify-content-center">
        Meditating
      </div>
      <div className="col">
        <img src={meditation} alt="" width={'50%'} />
      </div>
    </div>
    <div className="row row-cols-2">
      <div className="col d-flex align-items-center justify-content-center">
        <img src={cat} alt="" width={'50%'} />
      </div>
      <div className="col d-flex align-items-center justify-content-start ps-5">
        Quality time with my cat
      </div>
    </div>
    <div className="row row-cols-2">
      <div className="col d-flex align-items-center justify-content-center">
        And especially...<br/>
        singing
      </div>
      <div className="col">
        <img src={music} alt="" width={'50%'} />
      </div>
    </div>
  </div>
)