# With.in — Psicologia Clínica

A responsive single-page web application built for **With.in**, a clinical psychology practice founded by Joana Barbosa, based in Portugal. The site presents the clinic's services, team of psychologists, client testimonials, and contact details — all in Portuguese.

---

## Project Overview

The client required a professional online presence that would:

- Communicate the clinic's mission and humanistic approach to mental health care
- Present the full range of therapy services with pricing and booking options
- Showcase the team of qualified psychologists and their specialisations
- Display real client testimonials to build trust
- Provide clear contact information and scheduling options
- Be fully responsive across desktop and mobile devices
- Comply with Portuguese legal requirements (Terms & Conditions and Privacy Policy)
- Be optimised for search engines (sitemap, robots.txt, Google Search Console verification)

---

## Features

### Mission / Hero Section
- Introductory video with a static poster fallback, featuring the founder's message
- Written mission statement describing the clinic's philosophy and therapeutic approach
- Call-to-action button to navigate directly to the team section

### Services
- Card grid displaying each available therapy type with a dedicated image
- **Modal popups** with full service descriptions, session duration, target audience, and pricing:
  - **Terapia Individual** (Individual Therapy) — €50 · 50 min
  - **Terapia de Casal** (Couple Therapy) — €80 · 60 min
  - **Career Coaching** — €70
- "Book a session" button inside each modal, linking to an external Google Form

### Team
- Profile cards for each psychologist, showing photo, name, and title
- Expandable detail view per psychologist including:
  - Biography
  - Specialisations
  - Education & qualifications
  - Professional experience
  - Therapeutic approaches

### Testimonials
- Auto-scrolling infinite loop carousel displaying client testimonial images
- Click-to-enlarge modal for each testimonial
- External feedback form link (Google Forms) for new clients to leave reviews

### Contact
- Email address, phone number, and opening hours displayed prominently
- "Book First Session" call-to-action linking to Google Forms

### Appointment Scheduling (Modal)
- Integrated booking form (name, email, session type, time preference, optional phone)
- Client-side validation with clear error messages
- Terms & Conditions acceptance checkbox

### Navigation
- Sticky header that changes style on scroll
- Desktop navigation with anchor-based smooth scrolling between sections
- Hamburger menu for mobile with matching navigation links

### Legal Pages
- `/termos` — Terms & Conditions
- `/privacidade` — Privacy Policy

### SEO & Discoverability
- `sitemap.xml` listing all public pages
- `robots.txt` for crawler guidance
- Google Search Console ownership verification file

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Angular](https://angular.io/) v20 |
| Language | TypeScript |
| Styling | SCSS |
| Routing | Angular Router (lazy-loaded components) |
| Forms | Angular Reactive Forms |
| Package Manager | npm |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm start
# Navigate to http://localhost:4200/

# Build for production
npm run build
```
