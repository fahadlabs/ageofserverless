/**
 * @type {import('next-sitemap').IConfig}
 */

module.exports = {
  siteUrl: 'https://avalonx.tech',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],
  outDir: 'public',
};
