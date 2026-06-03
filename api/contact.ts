import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * Serverless contact endpoint — runs on Vercel as POST /api/contact.
 *
 * To actually receive emails, set two environment variables in your
 * Vercel project (Settings → Environment Variables):
 *   RESEND_API_KEY   – from https://resend.com (free)
 *   CONTACT_TO_EMAIL – the address you want messages delivered to
 *
 * Without RESEND_API_KEY the function still validates and returns success,
 * logging the submission to the Vercel function logs.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: 'Method not allowed.' })
    }

    const { name, email, message } = (req.body ?? {}) as {
        name?: string
        email?: string
        message?: string
    }

    // --- Validation ---
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res
            .status(400)
            .json({ ok: false, error: 'Name, email, and message are all required.' })
    }

    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!looksLikeEmail) {
        return res
            .status(400)
            .json({ ok: false, error: 'Please provide a valid email address.' })
    }

    if (message.length > 5000) {
        return res.status(400).json({ ok: false, error: 'Message is too long.' })
    }

    // --- Deliver the message ---
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (apiKey && toEmail) {
        try {
            const resp = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Resend's shared sender works without domain setup.
                    from: 'Portfolio Contact <onboarding@resend.dev>',
                    to: [toEmail],
                    reply_to: email,
                    subject: `New portfolio message from ${name}`,
                    text: `From: ${name} <${email}>\n\n${message}`,
                }),
            })

            if (!resp.ok) {
                console.error('Resend error:', await resp.text())
                return res
                    .status(502)
                    .json({ ok: false, error: 'Could not send message. Try again later.' })
            }
        } catch (err) {
            console.error('Contact send failed:', err)
            return res
                .status(500)
                .json({ ok: false, error: 'Something went wrong. Try again later.' })
        }
    } else {
        // No email provider configured yet — log so nothing is lost.
        console.log('📨 New contact submission:', { name, email, message })
    }

    return res.status(200).json({ ok: true })
}
