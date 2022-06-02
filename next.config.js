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
});

module.exports = nextConfig;
