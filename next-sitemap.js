/**
 * @type {import('next-sitemap').IConfig}
 */

module.exports = {
  siteUrl: 'https://ageofserverless.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/500'],
  outDir: 'public',
};
