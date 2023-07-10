import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Layout from "layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="Hello There :)" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="grid items-center grid-cols-1 mt-12 text-center">
          <h1 className="leading-tight md:leading-normal sm:text-5xl font-openSans">
            Hello I&#39;m <a className="text-blue-500" href="https://akilesh.io">Akilesh !!</a>
          </h1>
          <div className={styles.grid}>
            <a href="https://Filmingo.us/" className={styles.card}>
              <h2>Filmingo&rarr;</h2>
              <p>
                Filmingo is an innovative and immersive movie-watching application.
              </p>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.livestorm.control"
              className={styles.card}
            >
              <h2>Livestorm control&rarr;</h2>
              <p>
                Control is my take on a external sidebar plugin for livestorm.
              </p>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
