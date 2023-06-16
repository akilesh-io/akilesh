import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { Analytics } from '@vercel/analytics/react';

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
