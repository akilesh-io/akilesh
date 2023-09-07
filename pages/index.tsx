import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Lottie from "lottie-react";
import spaceGuy from "@/public/animation/space-guy.json";
import Layout from "layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Akilesh</title>
          <meta name="description" content="Hello There :)" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="grid items-center grid-cols-1 text-center">
          <h1 className="leading-tight md:leading-normal sm:text-5xl font-openSans">
            Hello I&#39;m <a className="text-blue-500" target="_blank" href="https://ayeb403edb0.typeform.com/to/MZSKhS0J">Akilesh !!</a>
          </h1>
          {/* place it in center and size it according ly to the screen size */}
          <div className="flex justify-center">
          <Lottie animationData={spaceGuy} loop={true} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
