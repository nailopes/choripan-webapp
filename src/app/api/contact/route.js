import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();

        // Optional: basic validation
        if (!data.name || !data.email || !data.message) {
            return new Response(JSON.stringify({ error: 'Missing fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create the transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // smtp.gmail.com
            port: process.env.EMAIL_PORT, // 587
            secure: process.env.EMAIL_PORT === '465',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            replyTo: data.email, // ✅ So replies go to the user
            subject: `New contact form message from ${data.name}`,
            text: `From: ${data.name} (${data.email})\n\n${data.message}`,
            html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send message' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
