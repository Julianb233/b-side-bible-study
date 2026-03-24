import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, firstTime } = body

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    )
  }

  // TODO: Connect to CRM / email service (e.g., GoHighLevel, Mailchimp)
  // For now, log the signup
  console.log('New signup:', { name, email, phone, firstTime })

  return NextResponse.json({ success: true })
}
