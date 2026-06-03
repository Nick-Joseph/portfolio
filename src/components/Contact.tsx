import { useState } from 'react'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('Form submitted:', { name, email, message })
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <section id="contact">
            <h2>Contact</h2>

            {submitted && <p>Thanks — I'll be in touch.</p>}

            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                    />
                </label>

                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact