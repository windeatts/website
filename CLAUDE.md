# Windeatts Solicitors Website

## Overview
This is the website for Windeatts Solicitors LLP, a Devon-based law firm (est. 1832) with offices in Kingsbridge and Totnes. Built with Astro 5, Tailwind CSS 4, and content collections in Markdown/MDX.

## Tech Stack
- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite)
- **Content:** Markdown (team, blog, vacancies) and MDX (services)
- **Hosting:** Vercel (auto-deploys from git push)
- **Forms:** Formspree for contact form

## Project Structure
```
src/
├── content/           # Content collections (edit these!)
│   ├── team/          # Team member .md files
│   ├── services/      # Service page .mdx files
│   ├── blog/          # Blog posts .md
│   └── vacancies/     # Job listings .md
├── components/        # Reusable Astro components
├── layouts/           # Page layouts (BaseLayout, PageLayout, ServiceLayout)
├── pages/             # Route pages
└── styles/            # Global CSS with Tailwind
```

## Commands
- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build for production to ./dist
- `npm run preview` — Preview production build locally

## Common Tasks

### Add a new team member
1. Create a new .md file in `src/content/team/` (use firstname-lastname.md)
2. Copy frontmatter from an existing file and update all fields
3. Add their photo to `public/images/team/` (use firstname-lastname.jpg)
4. Commit and push — the site rebuilds automatically

### Edit a team member
1. Open their file in `src/content/team/`
2. Edit the frontmatter (name, role, phone, etc.) or the body text
3. Commit and push

### Add a new service page
1. Create a new .mdx file in `src/content/services/`
2. Set frontmatter: title, category (personal/business), department, summary, icon, order
3. Write the page content in Markdown
4. Add the service to the Header component nav if needed: `src/components/Header.astro`

### Add a blog post
1. Create a new .md file in `src/content/blog/` (use date-slug format: 2026-03-buying-property-tips.md)
2. Set frontmatter: title, date, summary, author (optional), tags (optional)
3. Write the post in Markdown
4. Commit and push

### Add a job vacancy
1. Create a new .md file in `src/content/vacancies/`
2. Set frontmatter: title, location, type, department, active: true
3. Write the job description in Markdown
4. To remove a listing, set `active: false`

### Update office contact details
- Phone numbers in header: `src/components/Header.astro`
- Footer addresses: `src/components/Footer.astro`
- Office info cards: `src/components/OfficeInfo.astro`
- Contact page: `src/pages/contact.astro`

### Update costs table
- Edit `src/pages/our-costs.astro` — costs are in the HTML table

## Content Collection Schemas

### Team (src/content/team/*.md)
```yaml
name: "Full Name"
role: "Partner & Solicitor"
department: "property"  # property | private-client | litigation
title: "Head of Property & Partner"
photo: "/images/team/firstname-lastname.jpg"
email: "firstname.lastname@windeatts.co.uk"
phone: "01548 858647"
specialisms:
  - buying-or-selling-a-property  # service slugs
order: 1  # display order
```

### Services (src/content/services/*.mdx)
```yaml
title: "Service Name"
category: "personal"  # personal | business
department: "property"
summary: "One-line description"
icon: "home"  # home|users|scale|shield|heart|briefcase|document|currency|building|clipboard|key
relatedServices:
  - other-service-slug
order: 1
```

### Blog (src/content/blog/*.md)
```yaml
title: "Post Title"
date: 2026-03-15
summary: "Brief description"
author: "Richard Wing"
tags: ["property", "conveyancing"]
```

### Vacancies (src/content/vacancies/*.md)
```yaml
title: "Job Title"
location: "Kingsbridge/Totnes"
type: "Full-time, permanent"
department: "property"
active: true
```

## Design System
- **Brand colours:** Navy (#1a2744), Gold (#c9a84c), Cream (#faf8f5)
- **Fonts:** Lora (headings), Inter (body) — loaded from Google Fonts
- **Tailwind custom colours:** navy, navy-light, navy-dark, gold, gold-light, gold-dark, cream, cream-dark

## Regulatory Requirements (must not be removed)
- SRA digital badge in footer with link to SRA register
- Firm registration: OC382943
- SRA number: 636433
- VAT number: 141 4088 92
- Complaints procedure link in footer
- Privacy policy link in footer

## Deployment
Push to main branch — Vercel auto-builds and deploys. No manual steps needed.
