import { NextResponse } from 'next/server';

export async function GET(props: any) {
  console.log(props);
  return NextResponse.json({ xd: 1 });
}
