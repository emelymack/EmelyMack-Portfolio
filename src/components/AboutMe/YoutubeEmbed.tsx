import style from '../../assets/css/AboutMe.module.scss'

interface Props {
  embedId: string,
  classes: string
}

export const YoutubeEmbed = ({ embedId, classes }: Props) => (
  <div className={`${classes} ${style.videoResponsive} `}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

