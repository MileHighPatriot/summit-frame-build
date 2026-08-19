import type { NextConfig } from "next";

const repo = "summit-frame-build";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}`,
      }
    : {}),
};

export default nextConfig;
