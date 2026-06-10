import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

/**
 * Serverless contact endpoint — runs on Vercel as POST /api/contact.
 *
 * Sends form submissions to your inbox using Resend. Set two environment
 * variables in your Vercel project (Settings → Environment Variables):
 *   RESEND_API_KEY   – from https://resend.com (NEVER hardcode this in code)
 *   CONTACT_TO_EMAIL – the address you want messages delivered to
 *
 * Without those set, the function still validates and returns success,
 * logging the submission to the Vercel function logs (handy for local dev).
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

    // --- Validation: never trust the client ---
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

    // --- Deliver the message via Resend ---
    // The key comes from the environment, never from source code.
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !toEmail) {
        // Not configured yet — log so nothing is lost, but don't fail the user.
        console.log('📨 New contact submission (email not configured):', {
            name,
            email,
            message,
        })
        return res.status(200).json({ ok: true })
    }

    const resend = new Resend(apiKey)

    try {
        const { error } = await resend.emails.send({
            // onboarding@resend.dev is Resend's shared sender — works with no
            // domain setup, but only delivers to your own Resend account email.
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            replyTo: email, // so you can reply straight to the sender
            subject: `New portfolio message from ${name}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            text: `From: ${name} <${email}>\n\n${message}`,
        })

        if (error) {
            console.error('Resend error:', error)
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

    return res.status(200).json({ ok: true })
}
