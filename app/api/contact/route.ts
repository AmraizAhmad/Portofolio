import { NextResponse } from "next/server";

// This route accepts contact form submissions.
// Wire it up to an email provider (Resend, SendGrid, Nodemailer, etc.)
// by adding the provider call where indicated below.
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Example integration point:
    // await resend.emails.send({
    //   from: "portfolio@amraizahmad.dev",
    //   to: "iamamraiz.ahmad@gmail.com",
    //   subject: `New portfolio message from ${name}`,
    //   text: message,
    //   replyTo: email,
    // });

    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
