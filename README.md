# Editorial Developer Portfolio (React + TypeScript + Vite)

Burgundy and sage-green portfolio. All content lives in `src/data/`, so you never edit components for normal changes.
**Status:** code was written without network access, so `npm install` and `npm run build` have not been run yet. Run the checks in step 12 first and fix any reported error.

## Folder structure
```
src/data/       personal.ts, projects.ts, skills.ts, education.ts, siteConfig.ts  <- edit these
src/styles/     tokens.css (colors, fonts, spacing)  <- edit for theme
src/components/ Navigation, Hero, About, ProjectGrid, ProjectCard, ProjectCaseStudy, Skills, EducationTimeline, AIChat, ContactForm, Footer, Img
server/index.js Express API for the AI chat and contact email (holds secrets)
public/         images/ and documents/ (your photos and resume)
```

## How to Customize Your Portfolio
Requires Node.js 20.6 or newer. Save the file and the browser refreshes.

1. **Name and intro**: `src/data/personal.ts` → `displayName`, `fullName`, `title`, `intro`, `about`. Also set `monogram` and `title` in `src/data/siteConfig.ts`.
2. **College and education**: `personal.ts` → `college`, `degree`, `academicYear`, `graduationYear`. Timeline entries: `src/data/education.ts` (`{ date: "2023", title: "..." }`). Empty lists are hidden.
3. **Add or remove a project**: `src/data/projects.ts`. Copy one object, give it a new unique `id`, edit values, save. Delete an object to remove it. Gallery, filters, featured flag and case studies all read this one list.
4. **Project screenshots**: put files in `public/images/projects/` and set `image: "/images/projects/name.jpg"` (extra shots in `gallery`).
5. **Add a skill**: `src/data/skills.ts` → add `{ name: "React", status: "learning" }` to a group's `items`.
6. **GitHub and LinkedIn**: `personal.ts` → `github`, `linkedin`, `otherLinks`. Use full `https://` URLs.
7. **Profile photo**: replace `public/images/profile.jpg` (about photo: `about.jpg`). A placeholder shows until the file exists.
8. **Resume**: put your PDF at `public/documents/resume.pdf`. The Resume button appears only when the file exists.
9. **Theme colors**: edit variables in `src/styles/tokens.css` (e.g. `--color-frame`, `--color-panel`).
10. **AI assistant**: `cp .env.example .env`, set `AI_API_KEY` (Anthropic key) and optionally `AI_MODEL`. Hide it with `sections.assistant: false` in `siteConfig.ts`. Without a key the chat shows an honest "not configured" message.
11. **Contact delivery**: create a free Resend account, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (your inbox) and `CONTACT_FROM_EMAIL` in `.env`. The form shows success only after Resend accepts the email. Test: run the site, submit the form, check your inbox.
12. **Run locally**: `npm install`, then `npm run dev:all` (site at http://localhost:5173, API on 8787). Checks: `npm run typecheck`.
13. **Build and deploy**: `npm run build`, then `npm start` serves `dist/` and the API together on one port. Host on any Node host (Render, Railway, Fly) and set the same variables from `.env.example` in its dashboard. A static-only host (Netlify, Vercel) would need the two `/api` routes rewritten as serverless functions.

## Security notes
- `.env` is git-ignored; secrets are only read in `server/index.js`.
- The chat sends your public portfolio data to the server as grounding. Contact has a honeypot and an in-memory rate limit (resets on restart).
- Changing content never needs an API key.

## Not included yet
ESLint, analytics, Open Graph share image, Framer Motion (CSS transitions are used instead), blog/testimonials/GitHub-activity sections, and the hash-based per-project URLs (case studies open as a full-screen overlay).
