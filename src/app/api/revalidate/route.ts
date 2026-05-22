import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret.' }, { status: 401 });
  }

  revalidateTag('blog-posts');
  revalidatePath('/blog');

  return NextResponse.json({ revalidated: true, timestamp: Date.now() });
}
