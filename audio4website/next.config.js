/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
// next.config.js

module.exports = {
  head: {
    // Replace 'path/to/favicon.ico' with the actual path to your favicon file
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'public/4.png' }],
  },
};
