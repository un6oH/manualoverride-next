import { Image } from 'next/image'

export const ProjectCard = ({ title, date, description, imageSrc }) => {
  return (
    <div className='card'>
      <h1 className='card-title'>{title}</h1>
      <h2 className='card-date'>{date}</h2>
      <p className='card-description'>{description}</p>
    </div>
  )
}