import Card from 'react-bootstrap/Card';
import style from '../assets/css/Projects.module.scss'
import linkIcon from '../assets/img/link-icon.svg'

interface Props {
  img: string,
  title: string,
  description: string,
  webSrc: string
}

export const CardProject = ({img, title, description, webSrc}: Props) => (
  <div className="col">
    <a href={webSrc} target='_blank' style={{textDecoration: 'none'}}>
      <Card className={style.projectCard}>
        <Card.Img src={img} />
        <Card.Body className={style.cardBody}>
          <img src={linkIcon} alt="" className={style.linkIcon} />
          <Card.Title className={style.cardTitle}>{title}</Card.Title>
          <Card.Text className='fst-italic small'>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  </div>
  
)