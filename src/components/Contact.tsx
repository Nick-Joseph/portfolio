import { useState } from 'react'

// A small "state machine" for the form's status. Using a single string
// instead of several booleans keeps the UI states mutually exclusive.
type Status = 'idle' | 'sending' | 'success' | 'error'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [error, setError] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('sending')
        setError('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })

            const data = await response.json()

            if (!response.ok || !data.ok) {
                throw new Error(data.error ?? 'Something went wrong.')
            }

            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            setStatus('error')
            setError(err instanceof Error ? err.message : 'Something went wrong.')
        }
    }

    const sending = status === 'sending'

    return (
        <section id="contact">
            <h2>Contact</h2>

            <p className="contact-intro">
                Have a project or role in mind? Send a message below, or reach me directly:
            </p>
            <div className="contact-links">
                <a href="mailto:njoseph321@gmail.com">njoseph321@gmail.com</a>
                <a
                    href="https://github.com/Nick-Joseph"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>

            {status === 'success' && (
                <p className="form-success">Thanks — I’ll be in touch.</p>
            )}
            {status === 'error' && <p className="form-error">{error}</p>}

            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={sending}
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={sending}
                    />
                </label>

                <label>
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        disabled={sending}
                    />
                </label>

                <button type="submit" disabled={sending}>
                    {sending ? 'Sending…' : 'Send'}
                </button>
            </form>
        </section>
    )
}

export default Contact
