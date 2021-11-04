/**
 * @type {import('next').NextConfig}
 */

const runtimeCaching = require('next-pwa/cache');
const withPwa = require('next-pwa');

module.exports = withPwa({
  reactStrictMode: true,
  poweredByHeader: false,
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    scope: '/',
    sw: '/sw.js',
    publicExcludes: ['!noprecache/**/*', '!**/*.pdf'],
    disable: process.env.NODE_ENV === 'development',
  },
});
