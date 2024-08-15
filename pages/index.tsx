import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Lottie from "lottie-react";
import spaceGuy from "@/public/animation/space-guy.json";
import walkMan from "@/public/animation/walk-man.json";
import Layout from "layout/Layout";
import Marquee from "@/components/Marquee";
import UnderConstruction from "@/components/UnderConstruction";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="akilesh io" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="grid items-center grid-cols-1 text-center ">
          <h1 className="relative leading-tight md:leading-normal text-3xl sm:text-5xl font-openSans mt-20 md:mt-10">
            Hello I&#39;m{" "}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://ayeb403edb0.typeform.com/to/MZSKhS0J"
            >
              Akilesh !!
            </a>
          </h1>
          <div className="flex justify-center -mt-10 md:-mt-20">
            <Lottie
              animationData={spaceGuy}
              loop={true}
            />
          </div>
        </div>
        <HeroBall />
        <Marquee />
        <UnderConstruction />

      </Layout>
    </div>
  );
};

export default Home;
