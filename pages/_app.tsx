import "styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Preloader from "../components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { useState, useEffect } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";

// TODO: Remove bigilla font
const bigilla = localFont({
  src: '../public/fonts/Bigilla.otf',
  variable: '--font-bigilla',
  display: 'swap',
  preload: false,
})
const PRELOADER_WORDS = ["Hello", "வணக்கம்", "ഹലോ", "హలో", "ನಮಸ್ಕಾರ", "नमस्ते", "Hallo"];
const PRELOADER_DURATION_MS = 1000 + (PRELOADER_WORDS.length - 2) * 150 + 250;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(
      () => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      },
      prefersReducedMotion ? 0 : PRELOADER_DURATION_MS
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Meta />
      <ThemeProvider attribute="class">
        <div className={`font-sans ${bigilla.variable}`}>
          <AnimatePresence mode="wait">
            {isLoading && <Preloader words={PRELOADER_WORDS} />}
          </AnimatePresence>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </ThemeProvider>

      {/* Analytics */}
      <GoogleAnalytics gaId="G-N23NY12Z30" />
      <MicrosoftClarity />
    </MotionConfig>
  );
}

export default MyApp;
