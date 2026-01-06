import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, service });

    // Send notification email to you
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Shendy Studio <onboarding@resend.dev>",
        to: ["threr00@gmail.com"],
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const notificationData = await notificationRes.json();
    console.log("Notification email sent:", notificationData);

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Shendy Studio <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Shendy Studio!",
        html: `
          <h1>Thank you for reaching out, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your message:</p>
          <blockquote style="background: #f5f5f5; padding: 15px; border-left: 4px solid #c8ff00;">
            ${message}
          </blockquote>
          <p>Best regards,<br>Shendy Studio</p>
        `,
      }),
    });

    const confirmationData = await confirmationRes.json();
    console.log("Confirmation email sent:", confirmationData);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
