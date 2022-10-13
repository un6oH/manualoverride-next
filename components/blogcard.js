import styles from './card.module.css'

export const BlogCard = ({ title, description, date, odd }) => {
  return (
    <div className={styles.card + (odd ? ' ' + styles.single : '')}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.date}>{date}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
};