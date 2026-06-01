import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, cartModel, location, message } = await req.json();

    await resend.emails.send({
      from: "Lithium Golf Cart Conversions <onboarding@resend.dev>",
      to: "G.russellcarts@gmail.com",
      replyTo: email || undefined,
      subject: `New Conversion Inquiry — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f2744; border-bottom: 2px solid #22d3ee; padding-bottom: 8px;">
            New Golf Cart Conversion Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: 600;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Cart Model</td><td style="padding: 8px 0;">${cartModel}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Location</td><td style="padding: 8px 0;">${location}</td></tr>
          </table>
          ${message ? `<div style="margin-top: 16px; padding: 16px; background: #f0f5ff; border-radius: 8px;"><strong>Message:</strong><p style="margin: 8px 0 0;">${message}</p></div>` : ""}
          <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from your Lithium Golf Cart Conversions website</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
