import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { BLOGS } from 'assets/blogs';

export async function GET(req: NextRequest, { params }: { params: { index: number } }) {
  const { index } = params;

  const cookieStore = cookies();

  const loggedIn = cookieStore.get('loggedIn')?.value || '';
  const isLoggedIn = loggedIn === 'true';

  if (BLOGS.length <= index || index <= 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  if (isLoggedIn) {
    return NextResponse.json({ blog: BLOGS[index] });
  }
  return NextResponse.json({ blog: `${BLOGS[index].slice(0, 500)} ${'-'.repeat(BLOGS[index].length - 500)}` });
}
