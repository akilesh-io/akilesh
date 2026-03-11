import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "layout/Layout";
import Marquee from "@/components/Marquee";
import UnderConstruction from "@/components/UnderConstruction";
// import {MyScene1} from "@/components/Scene/MyScene1";
// import WoahText from "@/components/Scene/woahText";
import ComputerCanvas from "@/components/Scene/ComputerCanvas";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="akilesh" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="w-full h-screen overflow-hidden">
          <ComputerCanvas />
        </div>
        {/* <Marquee />
        <UnderConstruction /> */}

      </Layout>
    </div>
  );
};

export default Home;
