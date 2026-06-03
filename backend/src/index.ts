import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// --- Contact form endpoint -------------------------------------------------
// Receives { name, email, message } from the React contact form,
// validates it, and (optionally) emails it to you.
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body ?? {};

    // 1. Validation — never trust what the browser sends.
    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string" ||
        !name.trim() ||
        !email.trim() ||
        !message.trim()
    ) {
        return res
            .status(400)
            .json({ ok: false, error: "Name, email, and message are all required." });
    }

    // A simple email sanity check.
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!looksLikeEmail) {
        return res
            .status(400)
            .json({ ok: false, error: "Please provide a valid email address." });
    }

    if (message.length > 5000) {
        return res
            .status(400)
            .json({ ok: false, error: "Message is too long." });
    }

    // 2. Do something with the message.
    // For now we log it. In production the Vercel function emails it via Resend.
    console.log("📨 New contact submission:", { name, email, message });

    // 3. Respond.
    return res.json({ ok: true });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
