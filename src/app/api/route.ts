import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const loggedIn = cookieStore.get('loggedIn')?.value || '';
  const isLoggedIn = loggedIn === 'true';
  if (isLoggedIn) {
    return NextResponse.json({ test: 0 }, { status: 200, headers: { 'Set-Cookie': 'loggedIn=false' } });
  }
  return NextResponse.json({ test: 1 }, { status: 200, headers: { 'Set-Cookie': 'loggedIn=true' } });
}
