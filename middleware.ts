import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/blogs')) {
    return NextResponse.rewrite(new URL(pathname, "https://akilesh.lamento.in/"))
  }
  return NextResponse.next()
}