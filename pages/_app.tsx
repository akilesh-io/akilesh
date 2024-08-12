import "styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { PT_Serif, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Preloader from "../components/Preloader";
import { PageTransition } from "@/components/PageTransition";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const ptSerif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-serif",
});
const bigilla = localFont({
  src: '../public/fonts/Bigilla.otf',
  variable: '--font-bigilla'
})

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <Meta />
      <ThemeProvider attribute="class">
        <main className={`${openSans.variable} ${ptSerif.variable} font-sans ${bigilla.variable}`}>
          <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
          </AnimatePresence>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </main>
      </ThemeProvider>

      {/* Analytics */}
      <GoogleAnalytics gaId="G-N23NY12Z30" />
      <MicrosoftClarity />
    </>
  );
}

export default MyApp;
