/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Content-Type",
            value: "image/png",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
