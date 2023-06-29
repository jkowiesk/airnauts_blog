import { NextRequest, NextResponse } from 'next/server';

import { BLOGS } from 'assets/blogs';

export async function GET(request: NextRequest, { params }: { params: { index: number } }) {
  const { index } = params;
  const loggedIn = (request.cookies.get('loggedIn')?.value || '') as string;
  const isLoggedIn = loggedIn === 'true';

  if (BLOGS.length <= index || index <= 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  if (isLoggedIn) {
    return NextResponse.json({ blog: BLOGS[index] });
  }
  return NextResponse.json({ blog: `${BLOGS[index].slice(0, 500)} ${'-'.repeat(BLOGS[index].length - 500)}` });
}
