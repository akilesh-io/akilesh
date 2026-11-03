import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

const SITE_URL = "https://www.akilesh.in";
const OG_IMAGE = "https://res.cloudinary.com/davkfrmah/image/upload/v1725990570/Akilesh/a%20doughnut.png";

export default function Meta() {
  const { asPath } = useRouter();
  const url = `${SITE_URL}${asPath === "/" ? "/" : asPath.split(/[?#]/)[0]}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="me" href="https://mastodon.social/@akilesh_io" />
      </Head>
      <DefaultSeo
        defaultTitle="Freelance Developer &amp; Designer • Akilesh"
        titleTemplate="%s • Akilesh"
        description="Freelance web developer in Coimbatore. Experts in Web Design/Development, App Developer &amp; E commerce."
        canonical={url}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          siteName: "Akilesh • Freelance Developer",
          title: "Akilesh • Freelance Developer",
          description:
            "Helping businesses to build a strong online presence with a modern website and mobile app. Located in Coimbatore, India.",
          images: [
            {
              url: OG_IMAGE,
              width: 1200,
              height: 630,
              alt: "Akilesh",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@akilesh_io",
          site: "@akilesh_io",
        }}
      />
    </>
  );
}
