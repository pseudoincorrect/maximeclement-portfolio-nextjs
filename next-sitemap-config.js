const projectDataSize = 16;

function getProjectsSubpaths() {
  let projectPages = [];
  for (let i = 0; i < projectDataSize; i++) {
    projectPages.push(`/projects/${i}`);
  }
  return projectPages;
}

async function getPages(config) {
  let paths = [
    '/projects',
    '/projects/all',
    '/skills',
    '/path',
    '/leisure',
    '/contact',
  ];
  let projectPages = getProjectsSubpaths();
  paths = paths.concat(projectPages);

  let pages = [];
  paths.forEach(async (p) => {
    const path = await config.transform(config, p);
    pages.push(path);
  });
  return pages;
}

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
  additionalPaths: async (config) => {
    return getPages(config);
  },
};
