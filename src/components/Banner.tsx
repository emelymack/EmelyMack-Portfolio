import devIcon from '../assets/img/developer.svg'
import devImg from '../assets/img/img-webdev.svg'
import style from '../assets/css/Banner.module.scss'

export const Banner = () => {
  return (
    <div className={style.banner}>
      <div className='container d-flex align-items-center justify-content-start py-5'>
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col d-flex justify-content-center">
            <img src={devImg} alt="" className={style.bannerImg} />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-5 mt-lg-0">
            <h1 className={`me-3 ${style.title} display-5 text-center text-lg-start`}>Hi!<br className='d-none d-lg-block'/> I'm Emely Mack</h1>
            <img src={devIcon} alt={'Imagen de programadora'} width={50} />
            <p className='mt-4 fst-italic text-center text-lg-start' style={{fontSize: '18px'}}>
              A passionate Front-End Web Developer focused on building beautiful, useful, and responsive websites that catch the eye and enhance user experiences.
            </p>
            <a href="" className='btn btn-outline fw-bold px-4'>Contact me</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}