import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://golabautomation.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://golabautomation.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://golabautomation.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://golabautomation.com/products', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://golabautomation.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://golabautomation.com/team', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://golabautomation.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://golabautomation.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://golabautomation.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...postPages];
}
