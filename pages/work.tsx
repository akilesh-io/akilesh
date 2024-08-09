import Link from "next/link";
import Layout from "layout/Layout";
import Head from "next/head";
import { HoverEffect } from "@/components/Card";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-sky-800 uppercase dark:text-violet-400 mt-8">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl m-4">
          Some Of My Finest Works
        </span>
      </h1>

      <div className="my-10 grid w-full max-w-screen-xl mx-auto animate-fade-up px-5 xl:px-0">
        <HoverEffect items={projects} />
      </div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <Link
          href="https://contra.com/akilesh_io"
          className="relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-semibold">Start Your Project</span>
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


export const projects = [
  {
    title: "Livestorm control",
    tech:
      "Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.livestorm.control",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1702914394/Akilesh/livestorm.png",
  },
  {
    title: "Lamento",
    tech:
      "Web Application",
    link: "https://lamento.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1702915379/Akilesh/lamento%20landing.png",
  },
  {
    title: "The Boss Gym",
    tech: "Landing Page",
    link: "https://www.thebossgym.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723204796/boss.png",
  },
  {
    title: "2050 Technologies",
    tech: "Landing Page",
    link: "https://www.2050-technologies.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg",
  },
  {
    title: "ACT",
    tech:
      "Landing Page",
    link: "https://akictech.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1705562847/Akilesh/act.png",
  },
  {
    title: "Filmingo",
    tech:
      "Web Application",
    link: "https://filmingo.akilesh.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723204464/filmingo1.png",
  },
  {
    title: 'Wealth Pandit',
    tech: "Logo Design",
    link: "https://stage-eight.vercel.app/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723205790/wp%20logo.png"
  },
];