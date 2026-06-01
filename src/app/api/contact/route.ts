import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",

            to: process.env.CONTACT_EMAIL!,

            subject: `Portfolio Contact — ${name}`,

            replyTo: email,

            html: `
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json(
            {
                error: "Failed to send email",
            },
            { status: 500 },
        );
    }
}
