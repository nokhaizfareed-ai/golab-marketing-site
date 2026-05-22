export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  cat: string;
  date: string;
  excerpt: string;
  accent: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
  content?: string;    // markdown body
  images?: string[];   // carousel image URLs
  readTime?: number;   // estimated minutes
};

export function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 'default-1',
    slug: 'ghl-workflows-fire-twice',
    cat: 'Automation',
    date: 'Nov 12, 2026',
    title: 'Why your GHL workflows fire twice — and how to fix it',
    excerpt: 'The most common cause of duplicate triggers is also the easiest to miss. A 4-minute audit can save you hundreds of misfired SMS.',
    accent: '#FF3D4F',
    published: true,
    readTime: 4,
    createdAt: 1762905600000,
    updatedAt: 1762905600000,
    content: `## The duplicate trigger problem

If you've been running GoHighLevel workflows for any length of time, you've probably seen it: a contact gets the same SMS twice, a task is created in duplicate, or a deal moves through two stages at once.

The culprit is almost always **contact trigger overlap** — two workflow triggers firing for the same event on the same contact.

## The most common causes

### 1. Overlapping enrollment conditions
When multiple workflows share similar enrollment triggers (e.g., "Tag Added: lead") and your contacts match both, they fire simultaneously. GHL doesn't deduplicate across workflows.

### 2. Re-enrollment on edit
If you have "Allow Re-entry" enabled and an automation elsewhere edits the contact (changing a field that matches the trigger), the workflow fires again.

### 3. Webhook + native trigger combo
Pairing a Zapier/Make webhook trigger with a native GHL trigger for the same event creates a race condition.

## The 4-minute audit

1. Go to **Automations → History** and filter by the affected contact
2. Look for the same workflow appearing twice within seconds
3. Check the triggering event — it'll show which field/tag/action fired it
4. In the offending workflow, review the enrollment filter and tighten conditions
5. If using re-entry, add a **Contact Already In Workflow** condition to the filter

## Quick fix

Add a custom field \`wf_dedupe_[workflow_name]\` and set it to \`true\` as the first action in your workflow. Add an enrollment condition that checks this field is empty. Clear it at the end of the workflow.

This acts as a simple mutex and eliminates 90% of duplicate runs without touching your core logic.`,
  },
  {
    id: 'default-2',
    slug: 'a2p-10dlc-survival-guide',
    cat: 'GoHighLevel',
    date: 'Nov 04, 2026',
    title: 'A2P 10DLC for agencies: a survival guide',
    excerpt: 'Registration timelines, message throughput, and the seven mistakes that get your campaign rejected. Bookmark this one.',
    accent: '#6D5BFE',
    published: true,
    readTime: 6,
    createdAt: 1762214400000,
    updatedAt: 1762214400000,
    content: `## What is A2P 10DLC?

Application-to-Person (A2P) 10-digit long code (10DLC) is the US carrier framework that governs how businesses send SMS at scale. If your agency sends more than a handful of texts per day, you must register — or face message blocking and potential fines.

## The registration flow

1. **Brand registration** — Submit your business info (EIN, address, vertical). Takes 1-3 business days.
2. **Campaign registration** — Describe your use case (marketing, transactional, alerts, etc.). Takes 3-7 business days.
3. **Number linking** — Associate your GHL sub-account numbers with the approved campaign.

## The seven rejection mistakes

**1. Mismatched EIN/business name**
The EIN must match the legal business name exactly as filed with the IRS. Not your DBA, not your brand name.

**2. Vague campaign description**
"Sending marketing messages" gets rejected. "Sending appointment reminders and promotional offers to customers who opted in via web form at [URL]" gets approved.

**3. Missing opt-in language**
Every campaign needs documented proof of consent. Screenshot your opt-in form, include the URL, write out the exact opt-in language.

**4. Wrong use case category**
Marketing campaigns have lower throughput (10 msg/sec) than transactional. If you're mixing both, register separate campaigns.

**5. Website doesn't match the description**
Carriers check. Make sure your website has a clear privacy policy, terms of service, and SMS opt-in disclosure.

**6. Sample messages don't match use case**
Your 5 sample messages must match the campaign type exactly. Don't submit marketing copy for a transactional campaign.

**7. Re-submitting without fixing the root cause**
Each rejection costs money. Read the rejection reason carefully and fix all issues before resubmitting.

## Throughput numbers to know

| Campaign type | MPS per number | Daily limit |
|---|---|---|
| Low volume mixed | 1 msg/sec | 2,000 |
| Marketing | 10 msg/sec | 100,000 |
| Transactional | 10 msg/sec | 100,000 |

Plan your number pool accordingly.`,
  },
  {
    id: 'default-3',
    slug: 'zapier-vs-make-vs-n8n',
    cat: 'Integrations',
    date: 'Oct 28, 2026',
    title: 'When to use Zapier vs Make vs n8n (real talk)',
    excerpt: 'Cost, speed, debuggability, and edge cases. A decision tree based on 200+ builds — not vendor marketing.',
    accent: '#4FD0FF',
    published: true,
    readTime: 7,
    createdAt: 1761609600000,
    updatedAt: 1761609600000,
    content: `## The honest comparison

After 200+ automation builds across Zapier, Make (formerly Integromat), and n8n, here's the unfiltered take. No affiliate links, no vendor pitches.

## Zapier

**Use it when:**
- The client is non-technical and will maintain it themselves
- You're connecting two popular SaaS tools with official Zaps
- You need it done in 30 minutes and the volume is low

**Avoid when:**
- You need complex branching logic
- Volume exceeds ~50k tasks/month (gets expensive fast)
- You need to transform data in non-trivial ways

**The real cost:** At 50k tasks/month, you're paying $500+/month. At 200k tasks, it's prohibitive.

## Make (formerly Integromat)

**Use it when:**
- You need powerful data transformation
- You're dealing with arrays, iterators, or aggregators
- You want visual branching that clients can understand

**Avoid when:**
- Reliability is critical (Make has more downtime than Zapier)
- You need complex error handling across 10+ steps
- The client team is going to maintain it solo

**The real cost:** Much more reasonable — 10k operations/month on the Core plan. The "operations" model is more efficient than Zapier's "tasks" for complex workflows.

## n8n

**Use it when:**
- You're self-hosting and cost at scale matters
- You need custom code nodes (JavaScript)
- You're building something complex with many branches
- Privacy/data residency matters

**Avoid when:**
- The client will maintain it (steep learning curve)
- You don't have a server or infra team
- You need 99.9% uptime without ops overhead

**The real cost:** ~$20/month on their cloud (unlimited workflows), or self-host for free.

## The decision tree

\`\`\`
Client will maintain it?
├── Yes → Zapier (simple) or Make (complex)
└── No (your team maintains)
    ├── High volume (>100k tasks/mo) → n8n
    ├── Complex data transforms → Make or n8n
    └── Quick turnaround, standard integrations → Zapier
\`\`\`

## Our default stack

- **Zapier:** Quick client handoffs, standard CRM/email integrations
- **Make:** Anything involving GHL webhooks, arrays, or multi-path logic
- **n8n:** Internal tooling, high-volume pipelines, anything touching sensitive data`,
  },
];

export function getPublishedPosts(): BlogPost[] {
  const raw = (process.env.BLOG_POSTS ?? '').trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as BlogPost[];
      if (Array.isArray(parsed)) {
        return parsed
          .filter(p => p.published)
          .map(p => ({ ...p, slug: p.slug || slugify(p.title) }))
          .sort((a, b) => b.createdAt - a.createdAt);
      }
    } catch {}
  }
  return DEFAULT_POSTS.filter(p => p.published);
}

export function getAllPosts(): BlogPost[] {
  const raw = (process.env.BLOG_POSTS ?? '').trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as BlogPost[];
      if (Array.isArray(parsed)) {
        return parsed
          .map(p => ({ ...p, slug: p.slug || slugify(p.title) }))
          .sort((a, b) => b.createdAt - a.createdAt);
      }
    } catch {}
  }
  return DEFAULT_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getPublishedPosts().find(p => p.slug === slug) ?? null;
}

export function getCategories(posts: BlogPost[]): string[] {
  const cats = Array.from(new Set(posts.map(p => p.cat).filter(Boolean)));
  return cats.sort();
}
