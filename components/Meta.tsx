import Script from "next/script";
import { NextSeo } from "next-seo";

export default function Meta() {
  return (
    <>
      <NextSeo
        title="Hello there 👋 Akilesh here"
        description= "A indie developer who occasionally writes .."
        canonical="https://www.akilesh.in/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.akilesh.in/",
          siteName: "Akilesh_io",
          title: "Akilesh io",
          description:
            "I'm Akilesh, a indie developer who occasionally writes ..",
          images: [
            {
              url: "https://res.cloudinary.com/davkfrmah/image/upload/v1694539542/Akilesh/io%20home.png",
              width: 1200,
              height: 630,
              alt: "Akilesh",
            },
          ],
        }}
        twitter={{
          handle: "@akilesh_io",
          site: "@akilesh_io",
          cardType: "summary_large_image",
        }}
      />
      <meta name="twitter:image" content="https://res.cloudinary.com/davkfrmah/image/upload/v1694539542/Akilesh/io%20home.png" />
      
      <Script src="//embed.typeform.com/next/embed.js"></Script>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}
