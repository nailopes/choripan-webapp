import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();

        // Create a transporter with your email service details
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
            port: process.env.EMAIL_PORT, // e.g., 587
            secure: process.env.EMAIL_PORT === '465', // true for port 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Sender address
            to: process.env.EMAIL_TO, // Your receiving email address
            subject: `New message from ${data.name}`,
            text: `From: ${data.name} (${data.email})\n\n${data.message}`,
            html: `<p>From: ${data.name} (${data.email})</p><p>${data.message}</p>`
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