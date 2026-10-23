import { MetadataRoute } from 'next';
import { getArticles } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sanotaglobal.com';
  
  // High-value Money Pages & Static routes
  const routes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/tell-us-your-challenge', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/media', priority: 0.7, changeFrequency: 'weekly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
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
