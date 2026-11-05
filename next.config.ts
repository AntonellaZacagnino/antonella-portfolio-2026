import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES === "true" ? "/antonella-portfolio-2026" : "",
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
