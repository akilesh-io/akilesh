import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { Analytics } from '@vercel/analytics/react';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Meta />
    </>
  );
}

export default MyApp;
