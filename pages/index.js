import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Background } from '../components/background'
import { BlogGallery } from '../components/bloggallery'

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
            
          </div>
        </section>
        <section className='section-project'>
          <h1 className="section-title">Featured Project</h1>
          <ProjectGallery></ProjectGallery>
        </section>
        <footer>

        </footer>
      </main>
    </div>
  )
}
