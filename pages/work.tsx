import Link from "next/link";
import Layout from "layout/Layout";
import Head from "next/head";
import { HoverEffect } from "@/components/Card";
import { Form } from "@/components/form/Form";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
        <meta name="description" content="Works" />
      </Head>

      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-sky-800 uppercase dark:text-violet-400 mt-8">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl m-4">
          Some Of My Finest Works
        </span>
      </h1>
      <div className="grid w-full max-w-screen-xl mx-auto animate-fade-up py-2 sm:py-12">
        <HoverEffect items={projects} />
      </div>
      <div className="fixed bottom-0 sm:bottom-0 mb-3 mr-4 2xl:mb-16 2xl:mr-16 z-10 right-0">
        <Form />
      </div>
    </Layout >
  );
}


export const projects = [
  {
    title: "ACT",
    tech:
      ["Landing Page"],
    link: "https://act.akilesh.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1705562847/Akilesh/act.png",
  },
  {
    title: 'Swami Associates',
    tech: ["Landing Page", "CMS",],
    link: "https://www.swami-associates.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1742583282/Akilesh/swami%20associate.png"
  },
  {
    title: 'Wealth Pandit',
    tech: ["Admin Panel", "Mobile App", "Logo Design", "Landing Page", "Web Application",],
    link: "https://uat.wealthpandit.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723205790/wp%20logo.png"
  },
    {
    title: 'Baltimore Health Analytics',
    tech: ["Landing Page"],
    link: "https://baltimorehealthanalytics.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1742582099/Akilesh/baltimorehealthanalytics.png"
  },
  {
    title: "Livestorm control",
    tech:
      ["Mobile App"],
    link: "https://play.google.com/store/apps/details?id=com.livestorm.control",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1702914394/Akilesh/livestorm.png",
  },
  {
    title: "Lamento",
    tech:
      ["Web Application"],
    link: "https://lamento.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1702915379/Akilesh/lamento%20landing.png",
  },
  {
    title: "The Boss Gym",
    tech: ["Landing Page"],
    link: "https://www.thebossgym.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723204796/boss.png",
  },
  {
    title: "2050 Technologies",
    tech: ["Landing Page"],
    link: "https://www.2050-technologies.com/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg",
  },
  {
    title: "Filmingo",
    tech:
      ["Web Application"],
    link: "https://filmingo.akilesh.in/",
    image:
      "https://res.cloudinary.com/davkfrmah/image/upload/v1723204464/filmingo1.png",
  },
];