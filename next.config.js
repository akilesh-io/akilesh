/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com", // Images coming from Notion
      "www.notion.so", // Images coming from Notion
      "via.placeholder.com", // for articles that do not have a cover image
      "pbs.twimg.com", // Twitter Profile Picture
      "iad.microlink.io", // link preview
      "images.unsplash.com", // If notion cover image is from, unsplash
      "res.cloudinary.com",
      "img.icons8.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com", // <-- Add this line
    ],
  },
  // assetPrefix: 'https://akilesh.lamento.in/',
  basePath: "",
  // assetPrefix: '/',
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/work",
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
        // {
        //   source: "/blogs/:path*/",
        //   destination: "https://akilesh.lamento.in/:path*/",
        // },
        {
          source: "/blogs/:path*",
          destination: "https://akilesh.lamento.in/:path*",
        },
        // {
        //   source: "/:path*",
        //   destination: "https://akilesh.lamento.in/:path*",
        // },
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
