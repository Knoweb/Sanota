import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
      // Explicitly allow AI and Generative Search Crawlers (GEO Optimization)
      {
        userAgent: [
          'ChatGPT-User',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Bingbot',
          'Applebot-Extended'
        ],
        allow: '/',
        disallow: ['/admin', '/api'],
      }
    ],
    sitemap: 'https://www.sanotaglobal.com/sitemap.xml',
  };
}

