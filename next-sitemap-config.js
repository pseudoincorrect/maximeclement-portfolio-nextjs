module.exports = {
  siteUrl: 'https://www.maximeclement.com',
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/protected-page', '/awesome/secret-page'],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/projects'),
    await config.transform(config, '/skills'),
    await config.transform(config, '/path'),
    await config.transform(config, '/leisure'),
    await config.transform(config, '/contact'),
  ],
};
