import Script from "next/script";
import { NextSeo } from "next-seo";

export default function Meta() {
  return (
    <>
      <NextSeo
        title="Freelance Developer & Designer • Akilesh"
        description="Freelance developer based in Coimbatore India. Experts in Web Design, App Developer & E commerce."
        canonical="https://www.akilesh.in/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.akilesh.in/",
          siteName: "Akilesh • Freelance developer",
          title: "Akilesh • Freelance developer",
          description:
            "Helping businesses to build a strong online presence with a modern website and mobile app. Located in Coimbatore, India.",
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
