import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/lp/:path*",
        destination: "https://learn-nextjs-dashboard-ashy.vercel.app/lp/:path*", // Points to /app/landing-page-1/page.js
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/lp/landing-page-1",
  //       destination:
  //         "https://learn-nextjs-dashboard-ashy.vercel.app/lp/landing-page-1",
  //       permanent: true,
  //     },
  //     {
  //       source: "/lp/landing-page-2",
  //       destination:
  //         "https://learn-nextjs-dashboard-ashy.vercel.app/lp/landing-page-2",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
