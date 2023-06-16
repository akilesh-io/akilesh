import Link from "next/link";
import Layout from "@/components/Layout";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Works</title>
                <meta name="description" content="Works" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <a href="https://play.google.com/store/apps/details?id=com.livestorm.control" className={styles.card}>
                        <h2>Livestorm control&rarr;</h2>
                        <p>Control is my take on a external sidebar plugin for livestorm.</p>
                    </a>


                    <a href="https://filmingo.us/" className={styles.card}>
                        <h2>Filmingo&rarr;</h2>
                        <p>Filmingo is an innovative and immersive movie-watching application.</p>
                    </a>


                </div>
            </main>
        </Layout>
    )
}



