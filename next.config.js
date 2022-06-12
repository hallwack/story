const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  concurrentFeatures: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    scope: "/",
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/yuxxeun",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
