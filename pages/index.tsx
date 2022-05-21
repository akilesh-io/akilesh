import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Container from '../components/container'
import Layout from "../components/layout";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="Hello There :)" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello I'm <a href="https://akilesh.io">Akilesh !!</a>
          </h1>
        <div className={styles.grid}>
            <a href="https://play.google.com/store/apps/details?id=com.livestorm.control" className={styles.card}>
              <h2>Livestorm control &rarr;</h2>
              <p>Control is my take on a external sidebar plugin for livestorm.</p>
            </a>
        </div>
        <div className={styles.grid}>
            <a href="https://article-town-a3add.web.app/" className={styles.card}>
              <h2>Article town &rarr;</h2>
              <p>Article town is a web page helps you to share your article and follow others article.</p>
            </a>
        </div>
        </main>

      </Layout>
      {/* <footer className={styles.footer}>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
