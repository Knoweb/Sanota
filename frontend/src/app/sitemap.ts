import { MetadataRoute } from 'next';
import { getArticles } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sanotaglobal.com';
  
  // High-value Money Pages & Static routes
  const routes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/machine-retrofit-modernization', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/plc-hmi-iot-integration', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/custom-machinery-manufacturing', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/amc-preventive-maintenance', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries/tea-factory-automation', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries/greenhouse-smart-agriculture', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries/food-processing-machinery', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/industries/manufacturing-automation', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/case-studies/smart-drain-iot-flood-monitoring', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/locations/galle', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/de/industrieautomatisierung-iiot', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/de/industrieautomatisierung', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/de/iiot-loesungen', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/de/ausbildungssysteme', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/de/produktentwicklung', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/de/smarte-landwirtschaft', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/tell-us-your-challenge', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/media', priority: 0.7, changeFrequency: 'weekly' as const },
    { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
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
