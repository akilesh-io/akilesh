import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Layout from "layout/Layout";
import Marquee from "@/components/Marquee";
import UnderConstruction from "@/components/UnderConstruction";
// import {MyScene1} from "@/components/Scene/MyScene1";
// import WoahText from "@/components/Scene/woahText";

// react-three-fiber/drei/three pull in a large WebGL bundle and can't render
// server-side, so load them only in the browser once this page mounts.
const ComputerCanvas = dynamic(
  () => import("@/components/Scene/ComputerCanvas"),
  { ssr: false }
);

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
        <div className="w-screen h-screen overflow-visible">
          <ComputerCanvas />
        </div>
        {/* <Marquee />
        <UnderConstruction /> */}

      </Layout>
    </div>
  );
};

export default Home;
