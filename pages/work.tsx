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

      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-slate-800 uppercase dark:text-sky-400 mt-8">
          My Work
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl m-4">
          Some of My Recent Projects
        </span>
      </h1>
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
      {/* place this button on right side corner */}
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <Link
          href="https://contra.com/akilesh_io"
          className="relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Hire Me</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </Layout>
  );
}

const works = [
  {
    title: "The Boss Gym",
    description: "Landing Page based on Gym and Fitness ",
    link: "https://www.thebossgym.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1693840960/Akilesh/the%20boss%20gym.jpg",
  },
  {
    title: "2050 Technologies",
    description: " Green & Eco-Friendly Theme Landing Page ",
    link: "https://www.2050-technologies.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg",
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
    title: "Livestorm control",
    description:
      "Control is my take on a external sidebar plugin for livestorm.",
    link: "https://play.google.com/store/apps/details?id=com.livestorm.control",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1693814513/livestorm%20logo.png",
  },
  {
    title: "Lamento",
    description:
      "Notion as CMS",
    link: "https://www.lamento.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1695034105/Lamento/lamento%20banner.png",
  },  
];
