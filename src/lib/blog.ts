import { list } from '@vercel/blob';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  cat: string;
  tags?: string[];
  date: string;
  excerpt: string;
  accent: string;
  published: boolean;
  featured?: boolean;
  author?: string;
  createdAt: number;
  updatedAt: number;
  content?: string;
  images?: string[];
  readTime?: number;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
};

export function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getCategories(posts: BlogPost[]): string[] {
  return Array.from(new Set(posts.map(p => p.cat).filter(Boolean))).sort();
}

function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.createdAt - a.createdAt;
  });
}

// Cached per serverless instance — URL never changes (addRandomSuffix: false)
let _blobUrl: string | null | undefined = undefined;

async function resolveBlobUrl(): Promise<string | null> {
  if (_blobUrl !== undefined) return _blobUrl;
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    _blobUrl = null;
    return null;
  }
  try {
    const { blobs } = await list({ prefix: 'posts.json', limit: 1 });
    _blobUrl = blobs[0]?.url ?? null;
  } catch {
    _blobUrl = null;
  }
  return _blobUrl;
}

async function fetchAllPosts(): Promise<BlogPost[] | null> {
  const url = await resolveBlobUrl();
  if (!url) return null;
  try {
    // next.tags makes this fetch participate in on-demand revalidation
    const res = await fetch(url, { next: { tags: ['blog-posts'] } });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? (data as BlogPost[]) : null;
  } catch {
    return null;
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  if (!posts) return [];
  return sortPosts(posts.filter(p => p.published));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts ? sortPosts(posts) : [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getPublishedPosts();
  return posts.find(p => p.slug === slug) ?? null;
}
