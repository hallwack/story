const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    scope: "/",
  },

  // enabled experimentals features
  experimentals: {
    concurrentFeatures: true,
    serverComponents: true
  },

  // redirect to random URL
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
