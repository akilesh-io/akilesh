import "styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { PT_Serif, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import MicrosoftClarity from "@/components/MicrosoftClarity";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

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
  return (
    <>
      <Meta />
      <ThemeProvider attribute="class">
        <main className={`${openSans.variable} ${ptSerif.variable} font-sans ${bigilla.variable}`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>

      {/* Analytics */}
      <GoogleAnalytics gaId="G-N23NY12Z30" />
      <MicrosoftClarity />
    </>
  );
}

export default MyApp;
