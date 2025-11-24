# N. A. Gavkani — Dragon & Daffodil (Next.js starter)

This is a ready-to-run Next.js (pages-router) starter site for author **N. A. Gavkani**.
It includes pages for Home, About, Books, Book detail (slug), and Contact, plus a simple theme.

## Quick start (locally)

1. Install dependencies
```bash
cd nagavkani-nextjs
npm install
```

2. Run dev server
```bash
npm run dev
# open http://localhost:3000
```

3. Build for production
```bash
npm run build
npm start
```

## Deploy

Recommended: deploy to **Vercel** (free hobby tier). Connect your Git repository (GitHub/GitLab/Bitbucket),
add project, and set the root to the repository. Vercel will automatically detect Next.js.

### Domain (nagavkani.com)
You purchased your domain on Squarespace. After deploying to Vercel:
- In Vercel, add the custom domain `nagavkani.com` and follow the instructions.
- Update DNS at Squarespace: point the root (@) and www to Vercel's required A and CNAME records, or follow Squarespace's domain settings to add the Vercel records.

### Email (professional email)
Options:
- **Google Workspace**: paid, excellent UX. Add MX records in Squarespace DNS.
- **Zoho Mail**: has a free tier for single domain email, also uses MX records.
- **Proton Mail / FastMail / Microsoft 365**: alternatives.

General steps:
1. Sign up for the email provider and verify domain ownership.
2. Update MX records in Squarespace DNS as provided by the provider.
3. Optionally add SPF / DKIM / DMARC TXT records for deliverability.

## Files included
- pages/ (Next.js pages)
- components/
- public/ (put your author photo at /public/author.jpg)
- styles/globals.css

---

If you want, I can:
- Add a blog powered by markdown/MDX
- Add Netlify/Vercel serverless contact form endpoints
- Customize styles, fonts, and images

# nagavkani
# nagavkani
