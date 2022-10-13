import { Image } from 'next/image'
import styles from './card.module.css'

export const ProjectCard = ({ title, date, description, imageSrc, odd }) => {
  return (
    <div className={styles.card + (odd ? ' ' + styles.single : '')}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.date}>{date}</h2>
      <p className={styles.description}>{description}</p>
      <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" alt='Doge' />
    </div>
  )
}