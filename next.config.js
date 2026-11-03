/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/davkfrmah/**" },
      { protocol: "https", hostname: "img.icons8.com" },
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
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
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
