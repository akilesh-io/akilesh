/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" }, // Images coming from Notion
      { protocol: "https", hostname: "www.notion.so" },              // Images coming from Notion
      { protocol: "https", hostname: "via.placeholder.com" },        // for articles that do not have a cover image
      { protocol: "https", hostname: "pbs.twimg.com" },              // Twitter Profile Picture
      { protocol: "https", hostname: "iad.microlink.io" },           // link preview
      { protocol: "https", hostname: "images.unsplash.com" },        // If notion cover image is from, unsplash
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "img.icons8.com" },
      { protocol: "https", hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },// <-- Add this line
    ],
  },
  // assetPrefix: 'https://akilesh.lamento.in/',
  basePath: '',
  // assetPrefix: '/',
    async redirects() {
    return [
      {
        source: '/works',
        destination: '/work',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/docs/:path*",
          destination: "https://docs.lamento.in/:path*",
        },
      ],
      fallback: [
        {
          source: "/blogs/:path*",
          destination: "https://akilesh.lamento.in/:path*",
        },
        {
          source: "/_next/static/:path*",
          destination: "https://akilesh.lamento.in/_next/static/:path*"
        },
        {
          source: "/api/:path*",
          has: [
            {
              type: "header",
              key: "Access-Control-Allow-Origin",
            },
          ],
          destination: "http://localhost:3000/api/:path*",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/blogs/:path*",
        headers: [{ key: "x-forwarded-host", value: "akilesh.lamento.in" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ],
      },
    ];
  },
    // rewrites: async () => [
  //   {
  //     source: "/limeblog/:subdir*",
  //     destination: "https://blog.akilesh.in/:subdir*",
  //   },
  //   { source: "/(.*)", destination: "/" },
  //   {
  //     source: "/api/:path*",
  //     has: [
  //       {
  //         type: "header",
  //         key: "Access-Control-Allow-Origin",
  //       },
  //     ],
  //     destination: "http://localhost:3000/api/:path*",
  //   },
  // ],
};

module.exports = nextConfig;
