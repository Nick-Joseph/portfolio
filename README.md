# Nicholas Joseph — Portfolio

A full-stack personal portfolio built while learning React, TypeScript, and Node.

- **Frontend:** React 19 + TypeScript + Vite
- **Backend (local dev):** Express (`backend/`)
- **Backend (production):** Vercel serverless function (`api/contact.ts`)

## Project structure

```
.
├── index.html            # page shell + meta tags
├── src/
│   ├── App.tsx           # all site content lives in the block at the top
│   ├── components/       # Navbar, Hero, About, Skills, Projects, Resume, Contact
│   ├── types/            # shared TypeScript types
│   └── assets/           # images
├── api/
│   └── contact.ts        # serverless contact endpoint (runs on Vercel)
├── backend/              # local Express server (mirrors the contact endpoint)
└── public/               # static files served as-is (favicon, resume.pdf)
```

## Running locally

Frontend (Vite dev server on http://localhost:5173):

```bash
npm install
npm run dev
```

Backend (Express on http://localhost:5000) — in a second terminal:

```bash
cd backend
npm install
npm run dev
```

The Vite dev server proxies `/api` to the Express server (see `vite.config.ts`),
so the contact form works end-to-end in development.

## Editing site content

Open `src/App.tsx`. Everything you'd change — about text, skills, projects,
experience — is in the clearly marked `SITE CONTENT` block at the top.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com, sign in with GitHub, and click **Add New → Project**.
3. Import this repository. Vercel auto-detects Vite:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   Leave these as detected and click **Deploy**.
4. The `api/contact.ts` function deploys automatically — no separate setup.

### Making the contact form email you

By default the contact form validates and returns success but only logs the
message. To actually receive emails:

1. Create a free account at https://resend.com and copy an **API key**.
2. In Vercel: **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend key
   - `CONTACT_TO_EMAIL` = the address where you want messages delivered
3. Redeploy. Submissions now arrive in your inbox.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the Vite dev server             |
| `npm run build` | Type-check and build for production   |
| `npm run lint`  | Run ESLint                            |
| `npm run preview` | Preview the production build locally |
