import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="Hello There :)" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello I&#39;m <a href="https://akilesh.io">Akilesh !!</a>
          </h1>
          <div className={styles.grid}>
            <a href="https://play.google.com/store/apps/details?id=com.livestorm.control" className={styles.card}>
              <h2>Livestorm control&rarr;</h2>
              <p>Control is my take on a external sidebar plugin for livestorm.</p>
            </a>


            <a href="https://article-town-a3add.web.app/" className={styles.card}>
              <h2>Article town&rarr;</h2>
              <p>Article town is a web page helps you to share your article and follow others article.</p>
            </a>


          </div>
        </main>

      </Layout>
    </div>
  )
}

export default Home
