import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Meta />
    </>
  );
}

export default MyApp;
