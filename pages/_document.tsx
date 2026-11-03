import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[data-preloader]{display:none!important}' +
                '[data-page-transition]{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
      </Head>
      <body className="text-black dark:bg-[#0e1012] dark:text-white">
        <div className="bg" aria-hidden="true"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
