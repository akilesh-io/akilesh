import Link from "next/link";
import Layout from "layout/Layout";
import Head from "next/head";
import Card from "@/components/Card";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
        <link rel="icon" href="/favicon.png" />
      </Head>

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
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1693814513/livestorm%20logo.png",
  },
  {
    title: "Filmingo",
    description:
      "Filmingo is an innovative and immersive movie-watching application.",
    link: "https://filmingo.us/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1686146984/Filmingo/temp_film_bvuced.jpg",
  },
  {
    title: "2050 Technologies",
    description: " Green & Eco-Friendly Theme Landing Page ",
    link: "https://www.2050-technologies.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg",
  },
  {
    title: "The Boss Gym",
    description: "Landing Page based on Gym and Fitness ",
    link: "https://www.thebossgym.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1693840960/Akilesh/the%20boss%20gym.jpg",
  },
];
