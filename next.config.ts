import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/lp/landing-page-1",
        destination:
          "https://learn-nextjs-dashboard-ashy.vercel.app/lp/landing-page-1", // Points to /app/landing-page-1/page.js
      },
      {
        source: "/lp/landing-page-2",
        destination:
          "https://learn-nextjs-dashboard-ashy.vercel.app/lp/landing-page-2", // Points to /app/landing-page-2/page.js
      },
    ];
  },
};

export default nextConfig;
