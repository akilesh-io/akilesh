import Link from "next/link";
import Layout from "layout/Layout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { title } from "process";
import Card from "@/components/Card";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className={styles.main}>
        <div className={styles.grid}>
          <a
            href="https://play.google.com/store/apps/details?id=com.livestorm.control"
            className={styles.card}
          >
            <h2 className="text-gray-900 dark:text-white">
              Livestorm control&rarr;
            </h2>
            <p>
              Control is my take on a external sidebar plugin for livestorm.
            </p>
          </a>

          <a href="https://filmingo.us/" className={styles.card}>
            <h2>Filmingo&rarr;</h2>
            <p>
              Filmingo is an innovative and immersive movie-watching
              application.
            </p>
          </a>
        </div>
      </div> */}

      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {works.map(({ title, description, link, image }) => (
          <Card
            key={title}
            title={title}
            description={description}
            link={link}
            image={image}
          />
        ))}
      </div>
    </Layout>
  );
}

const works = [
  {
    title: "Livestorm control",
    description:
      "Control is my take on a external sidebar plugin for livestorm.",
    link: "https://play.google.com/store/apps/details?id=com.livestorm.control",
    image: "https://res.cloudinary.com/davkfrmah/image/upload/v1693814513/livestorm%20logo.png",
  },
  {
    title: "Filmingo",
    description:
      "Filmingo is an innovative and immersive movie-watching application.",
    link: "https://filmingo.us/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1686146984/Filmingo/temp_film_bvuced.jpg",
  },
];
