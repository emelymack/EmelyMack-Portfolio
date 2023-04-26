import devIcon from '../assets/img/developer.svg'
import devImg from '../assets/img/img-webdev.svg'
import style from '../assets/css/Banner.module.scss'

export const Banner = () => {
  return (
    <div className={style.banner}>
      <div className='container d-flex align-items-center py-5'>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img src={devImg} alt="" className='w-100' />
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h1 className={`me-3 ${style.title}`}>Hi!<br/> I'm Emely Mack</h1>
            <img src={devIcon} alt={'Imagen de programadora'} width={50} />
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo maximus scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}