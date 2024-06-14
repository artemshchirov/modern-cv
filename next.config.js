/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'ik.imagekit.io',
        protocol: 'https',
      },
    ],
    unoptimized: true,
  },

  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    if (!fileLoaderRule) {
      console.warn(
        'Could not find file loader rule for SVGs. This is unexpected.',
      );
    }

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
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
