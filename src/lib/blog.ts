export type BlogPost = {
  id: string;
  title: string;
  cat: string;
  date: string;
  excerpt: string;
  accent: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
};

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 'default-1',
    cat: 'Automation',
    date: 'Nov 12, 2026',
    title: 'Why your GHL workflows fire twice — and how to fix it',
    excerpt: 'The most common cause of duplicate triggers is also the easiest to miss. A 4-minute audit can save you hundreds of misfired SMS.',
    accent: '#FF3D4F',
    published: true,
    createdAt: 1762905600000,
    updatedAt: 1762905600000,
  },
  {
    id: 'default-2',
    cat: 'GoHighLevel',
    date: 'Nov 04, 2026',
    title: 'A2P 10DLC for agencies: a survival guide',
    excerpt: 'Registration timelines, message throughput, and the seven mistakes that get your campaign rejected. Bookmark this one.',
    accent: '#6D5BFE',
    published: true,
    createdAt: 1762214400000,
    updatedAt: 1762214400000,
  },
  {
    id: 'default-3',
    cat: 'Integrations',
    date: 'Oct 28, 2026',
    title: 'When to use Zapier vs Make vs n8n (real talk)',
    excerpt: 'Cost, speed, debuggability, and edge cases. A decision tree based on 200+ builds — not vendor marketing.',
    accent: '#4FD0FF',
    published: true,
    createdAt: 1761609600000,
    updatedAt: 1761609600000,
  },
];

// Reads directly from process.env — no HTTP calls, no latency.
// BLOG_POSTS is updated by the admin portal via Vercel API and picked up on next cold start.
export function getPublishedPosts(): BlogPost[] {
  const raw = (process.env.BLOG_POSTS ?? '').trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as BlogPost[];
      if (Array.isArray(parsed)) return parsed.filter(p => p.published);
    } catch {}
  }
  return DEFAULT_POSTS.filter(p => p.published);
}
