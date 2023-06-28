import { NextResponse } from 'next/server';

import { BLOGS } from 'assets/blogs';

export async function GET(request: any, { params }: { params: { index: number } }) {
  const { index } = params;
  if (BLOGS.length <= index || index <= 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ blog: BLOGS[index] });
}
