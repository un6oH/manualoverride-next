import ProjectCard from './projectcard'
import styles from './gallery.module.css'

export default function ProjectGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.filterBar}></div>
      <div className={styles.cardsContainer}></div>
    </div>
  )
}