import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "layout/Layout";
// import styles from "@/styles/Home.module.css";
// import Marquee from "@/components/Marquee";
// import UnderConstruction from "@/components/UnderConstruction";
// import {MyScene1} from "@/components/Scene/MyScene1";
// import WoahText from "@/components/Scene/woahText";

// react-three-fiber/drei/three pull in a large WebGL bundle and can't render
// server-side, so load them only in the browser once this page mounts.
const ComputerCanvas = dynamic(
  () => import("@/components/Scene/ComputerCanvas"),
  {
    ssr: false,
    loading: () => <div className="w-full h-full" aria-hidden="true" />,
  }
);

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Screen readers and crawlers get nothing from a bare WebGL canvas. */}
      <h1 className="sr-only">
        Akilesh - freelance web developer and designer
      </h1>
      <div className="w-screen h-screen overflow-visible">
        <ComputerCanvas />
      </div>
        {/* <Marquee />
        <UnderConstruction /> */}
    </Layout>
  );
};

export default Home;
