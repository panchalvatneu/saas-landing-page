/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // GitHub Pages config
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/saas-landing-page" : "", // Set the base path to match your GitHub Pages subpath
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/saas-landing-page/" : "", // Set the asset prefix to match the subpath
  images: {
    unoptimized: true,
  },
  //trailingSlash: true, // Ensures all paths have trailing slashes
  // ...other config
};

export default nextConfig;
