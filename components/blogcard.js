export const BlogCard = ({ title, description, date }) => {
  return (
    <div className='card'>
      <h1 className='card-title'>{title}</h1>
      <h2 className='card-date'>{date}</h2>
      <p className='card-description'>{description}</p>
    </div>
  )
};