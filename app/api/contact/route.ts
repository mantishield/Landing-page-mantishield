import { NextResponse } from "next/server";

const CONTACT_TO = "info@mantishield.xyz";
// Before verifying the domain in Resend, only "onboarding@resend.dev" is
// allowed as sender. After DNS verification, set RESEND_FROM in Vercel to
// e.g. "MantisShield <noreply@mantishield.xyz>".
const FROM = process.env.RESEND_FROM || "MantisShield <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const submission = {
      name: String(body.name).slice(0, 200),
      email: String(body.email).slice(0, 200),
      organization: String(body.protocol || "N/A").slice(0, 200),
      message: String(body.message).slice(0, 5000),
      timestamp: new Date().toISOString(),
    };

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Not configured yet — keep previous behavior so the form doesn't break
      console.warn("RESEND_API_KEY not set. Logging submission instead.");
      console.log("Contact form submission:", submission);
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [CONTACT_TO],
        reply_to: submission.email,
        subject: `[mantishield.xyz] Contact: ${submission.name}`,
        // Plain text — no HTML, so user input can't inject markup
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Organization: ${submission.organization}`,
          `Date: ${submission.timestamp}`,
          ``,
          `Message:`,
          submission.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", res.status, detail);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
