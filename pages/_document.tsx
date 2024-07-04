import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="me" href="https://mastodon.social/@akilesh_io" />
        </Head>
        <body className="prose-headings:font-headings dark:bg-[#0e1012]">
          <div className='bg'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;