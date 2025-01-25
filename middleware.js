import { NextResponse } from 'next/server';

export async function middleware(request) {
  const password = request.cookies.get('p-admin');
  
  if(!password){
    return NextResponse.redirect(new URL('/login', request.url));

  }

    const response = await fetch('http://localhost:3000/api/aboutme');
    const data = await response.json();

    if (data[0].password.trim() !== password.value.trim()) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

  return NextResponse.next();
}

export const config = {
  matcher: '/panel',
};
