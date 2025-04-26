import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  const data = await request.json()
  
  // Save the whole consent object as one cookie
  cookies().set('cookie_consent', JSON.stringify(data), {
    httpOnly: false, 
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'strict',
  })

  return NextResponse.json({ success: true })
}
