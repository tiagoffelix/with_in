# With.in Website, Earlier Implementation

## Concise overview
This repository contains an Angular frontend for the With.in clinical psychology website in Portuguese. It includes a landing page with services, team, testimonials, contact details, legal pages, and booking links.

## Status and context
**This repository contains an earlier implementation of the With.in website. A later version was delivered for the client but is no longer publicly hosted.**

This codebase should be treated as an archived portfolio version and a previous frontend iteration. It is not the current production website.

## My role
- Repository ownership and commit history indicate a solo implementation for this codebase
- Git history shows 56 commits by the same GitHub account identity, with two author name variants mapped to the same noreply email
- Work includes frontend development, styling, routing, legal pages, and deployment workflow updates

## What I built or contributed
Verified from repository files and commit history:
- Built the Angular single page frontend sections for hero, services, team, testimonials, and contact
- Implemented modal flows for service details, team profiles, and testimonial image enlargement
- Integrated Google Forms booking and feedback links from multiple entry points
- Implemented reactive appointment form logic with client side validation in `appointment-modal.component.ts`
- Added legal routes and pages for terms and privacy at `/termos` and `/privacidade`
- Added SEO related files and metadata including `robots.txt`, `sitemap.xml`, canonical URL, and search console verification file
- Added and adjusted GitHub Pages deployment workflow and custom domain output handling

## Design or engineering decisions
- Used standalone Angular components for feature sections while keeping an `AppModule` bootstrap path for the app shell
- Used route based navigation for legal pages and fragment based scroll navigation for one page sections
- Used static JSON data sources for psychologist and service content under `src/data`
- Used IntersectionObserver logic for team and testimonial loop activation and hero video visibility handling
- Used SCSS with responsive breakpoints across component styles and global styles

## Main systems or features
- Hero section with local video asset and poster image
- Services grid with service detail modal and booking CTA
- Team carousel style loop with profile modal
- Testimonials loop with modal zoom
- Contact section with email, phone, hours, and booking CTA
- Legal pages for terms and privacy
- Sticky header and mobile navigation behavior

## Architecture or project structure
- `src/app`: app shell, routes, module wiring
- `src/components`: standalone UI sections and legal pages
- `src/services`: frontend data and appointment services
- `src/data`: JSON content files
- `src/assets`: images, video, testimonial media, service graphics
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow

## Technologies
- Angular 20
- TypeScript
- SCSS
- Angular Router
- Angular Reactive Forms
- npm

## Controls or usage
- Use top navigation or section buttons to move through the page
- Use "Saber mais" in services and card clicks in team to open modals
- Use booking buttons to open external Google Forms
- Use `/termos` and `/privacidade` routes to inspect legal content

## Running locally
Prerequisites:
- Node.js 20.x
- npm

Install and run:
```bash
npm ci
npm start
```
Open `http://localhost:4200/`.

Production build:
```bash
npm run build
```

Test command currently configured:
```bash
npm test
```

## Known limitations
- This repository is an earlier implementation, not the final delivered source
- No project license file is present in the repository root
- Unit test files are not present, so `npm test` currently fails due to no spec inputs
- Production build can fail in restricted environments when Google Fonts cannot be resolved
- Booking and feedback flows depend on external Google Forms URLs

## Screenshots or media
Existing media in the repository:
- Hero video: `src/assets/Vídeo.mp4`
- Team photos: `src/assets/*.jpg`
- Service artwork: `src/assets/services/*.png`
- Testimonial images: `src/assets/testemunhos/*.png`

No dedicated product screenshots are currently stored in the repository.

## Related links
- Historical domain referenced in metadata and deployment config: `https://with-in.pt`
- Google Forms booking links are embedded in UI components

## Credits
- Clinical content, branding, and service information belong to With.in and its professionals
- Frontend implementation in this repository is attributed by commit history to the repository owner account

## Licence
No licence file is currently present.
