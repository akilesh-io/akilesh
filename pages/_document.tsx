import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>

      </Head>
      <body className="prose-headings:font-headings dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
