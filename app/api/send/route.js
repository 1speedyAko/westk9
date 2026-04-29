// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const hasResendConfig = Boolean(
  process.env.RESEND_API_KEY &&
  process.env.RESEND_FROM_EMAIL &&
  process.env.RESEND_TO_EMAIL
);
const resend = hasResendConfig ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();
    
    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!hasResendConfig) {
      console.warn('Resend is disabled: missing RESEND_API_KEY or email env vars.');
      return NextResponse.json(
        {
          success: true,
          devMode: true,
          message: 'Email sending is disabled during development because Resend env vars are missing.',
        },
        { status: 200 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      reply_to: email,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}

        Message:
        ${message}
            `,
            // Optional HTML version
       html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
        `,
        });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data.id },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}