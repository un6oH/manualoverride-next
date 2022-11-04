import BlogCard from './blogcard'
import styles from './gallery.module.css'

export default function BlogGallery() {
  

  return (
    <div className={styles.gallery}>
      <div className={styles.filterBar}>
        <button></button>
      </div>
      <div className={styles.cardsContainer}>

      </div>
    </div>
  )
}