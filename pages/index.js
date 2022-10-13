import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Background } from '../components/background'
import { BlogCard } from '../components/blogcard'
import { ProjectCard } from '../components/projectcard'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Manual Override</title>
      </Head>

      <Background></Background>

      <main id='home-container'>
        <header>
          <div id="title-container">
            <h1>Manual Override</h1>
            <h2>Words and works of a lifelong learner</h2>
            <p>Sample text.</p>
          </div>
        </header>
        <section className='section-blogs'>
          <h1 className="section-title">Blogs</h1>
          <div className='card-gallery'>
            <BlogCard 
              title="Amogus" 
              date="6/10/2022" 
              description={`Me (M 9) screamed "dead body reported" at my aunts funeral. My mom said that my aunt died and that we are going to her funeral the next morning. As soon as she left the room crying I busted put laughing because it reminded me of among us a popular video game.`}>
            </BlogCard>
            <BlogCard
              title="French People"
              date="20/4/1969"
              description={`I'm a (22M, American) who lives with my spouse (22F, American) and we are happily Frenchfree. One issue I find as someone who is not to keen on french people is how often times I feel there is no escape from being around them.`}>
            </BlogCard>
          </div>
        </section>
        <section className='section-project'>
          <h1 className="section-title">Featured Project</h1>
          <div className='#featured-project-container'>
            <ProjectCard
              title="Doge"
              date="2/11/2005"
              description="much manual. very override"
              imageSrc="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
              odd={true}
            ></ProjectCard>
          </div>
        </section>
        <footer>

        </footer>
      </main>
    </div>
  )
}
