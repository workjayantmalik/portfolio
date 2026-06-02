# Portfolio — Jayant Malik

Personal portfolio website for **Jayant Malik**, a Software Engineer from Chandigarh, India. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 12
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Custom CSS with CSS custom properties
- **Icons:** react-icons (Ionicons 5)
- **Linting:** ESLint (next/core-web-vitals)

## Sections

| Route              | Page         |
|--------------------|--------------|
| `/`                | About        |
| `/certifications`  | Education & Experience timeline |
| `/skills`          | Skill proficiency bars |
| `/portfolio`       | Project gallery with category filter |
| `/contact`         | Contact form with map |

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command           | Description          |
|-------------------|----------------------|
| `npm run dev`     | Start dev server     |
| `npm run build`   | Production build     |
| `npm run start`   | Start production server |
| `npm run lint`    | Run ESLint           |

## Project Structure

```
src/
├── components/     # Navbar, Sidebar
├── constants/      # Route definitions
├── css/            # Tailwind directives & custom styles
└── pages/          # About, Certifications, Skills, Portfolio, Contact
```

Built with create-next-app.
