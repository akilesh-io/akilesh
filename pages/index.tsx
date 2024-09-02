import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Lottie from "lottie-react";
import spaceGuy from "@/public/animation/space-guy.json";
import walkMan from "@/public/animation/walk-man.json";
import Layout from "layout/Layout";
import Marquee from "@/components/Marquee";
import UnderConstruction from "@/components/UnderConstruction";
// import {MyScene1} from "@/components/Scene/MyScene1";
// import WoahText from "@/components/Scene/woahText";
import MyScene from "@/components/Scene/MyScene";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="akilesh io" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="w-full h-screen overflow-hidden">
          <MyScene />
        </div>
        <Marquee />
        <UnderConstruction />

      </Layout>
    </div>
  );
};

export default Home;
