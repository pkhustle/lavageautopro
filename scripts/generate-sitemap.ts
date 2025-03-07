import * as fs from 'fs';
import { SERVICES, LOCATIONS, SITE_CONFIG } from '../lib/constants';

interface Page {
  url: string;
  priority: string;
  changefreq: string;
}

const BASE_URL = SITE_CONFIG.url;

function generateSitemap(): void {
  const pages: Page[] = [
    // Homepage
    {
      url: '/',
      priority: '1.0',
      changefreq: 'weekly'
    },
    // Contact page
    {
      url: '/contact',
      priority: '0.8',
      changefreq: 'monthly'
    },
    // Service pages
    ...SERVICES.map(service => ({
      url: `/${service.id}`,
      priority: '0.9',
      changefreq: 'weekly'
    })),
    // Service location pages
    ...SERVICES.flatMap(service =>
      LOCATIONS.map(location => ({
        url: `/${service.id}/${location.id}`,
        priority: '0.8',
        changefreq: 'weekly'
      }))
    )
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
