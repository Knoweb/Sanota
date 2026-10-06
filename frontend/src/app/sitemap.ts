import { MetadataRoute } from 'next';
import { getArticles } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sanotaglobal.com';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/products',
    '/industries',
    '/insights',
    '/media',
    '/contact',
    '/tell-us-your-challenge'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes for articles
  try {
    const articles = await getArticles(100); // Fetch up to 100 articles
    if (articles && articles.length > 0) {
      const articleRoutes = articles.map((article: any) => ({
        url: `${baseUrl}/blog-details/${article.slug}`,
        lastModified: new Date(article.updatedAt || article.publishedAt || article.date || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
      return [...routes, ...articleRoutes];
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return routes;
}
