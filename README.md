# HeartBeatWala

**HeartBeat Music Class a warm, community-first website for learning music.**

HeartBeatWala is the website for **HeartBeat Music Class (HBMC)**, a local music school built around the idea that learning an instrument should feel less like attending a class and more like becoming part of a musical community.

The website helps students explore classes, understand the learning journey, discover HBMC's branches, and get a feel for the people and environment behind the school.

---

## What it offers

* Explore music classes and available instruments
* Learn about HBMC and its teaching philosophy
* Explore the atmosphere and community through **Inside HBMC**
* View student experiences through the **Student Constellation**
* Access music-learning resources and tools as they are introduced

## Design

HeartBeatWala follows a **Warm Cinematic Editorial** direction.

The visual language is intentionally different from the typical coaching-class or SaaS website.

**The goal is to feel:**

* Warm
* Musical
* Human
* Welcoming
* Peaceful
* Slightly premium
* Community-driven

The design uses warm cream and beige tones, deep charcoal/espresso typography, cinematic photography, generous whitespace, subtle rounded elements, and restrained animation.

The interface deliberately avoids heavy dashboards, excessive cards, futuristic visuals, and over-engineered UI.

---

## Technical Overview

HeartBeatWala is a modern frontend application focused on a responsive, component-driven architecture.

### Core technologies

* **React** — Component-based UI development
* **TypeScript** — Type safety and maintainable code
* **Vite** — Development server and production build tooling
* **TanStack Router** — File-based/type-safe application routing
* **Tailwind CSS** — Utility-first styling

### Architecture

The application is organized around reusable components, structured site data, and route-level pages.

```text
src/
├── assets/          
├── components/      
│   ├── ui/          
│   ├── Constellation.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── PageHeader.tsx
│   └── Reveal.tsx
├── data/            # Structured, replaceable site content
│   ├── site.ts
│   └── testimonials.ts
├── hooks/           # Reusable React hooks
├── lib/             # Shared utilities
├── routes/          # Application routes/pages
├── main.tsx         # Application entry point
├── router.tsx       # Router configuration
├── routeTree.gen.ts # Generated route tree
└── styles.css       # Global styles
```

### Data-driven content

Content that is likely to change is kept separate from presentation where practical.

For example:

```text
src/data/
├── site.ts
└── testimonials.ts
```

This makes information such as courses, branches, and student testimonials easier to update without modifying the components responsible for displaying them.

The **Student Constellation** follows the same principle: each interactive star represents a specific student and is mapped to that student's testimonial data.

---

## Site Structure

```text
Home
├── Hero
├── About HBMC
├── The Journey
├── Sunday Masterclass
├── Popular Courses
├── Inside HBMC
├── Student Constellation
└── Join HBMC

Classes
├── Courses
├── Levels
├── Timings
├── Fees
└── Locations

Journey
├── Week One
├── Month Three
├── Every Sunday
├── The Stage
└── Community

About
├── HBMC Story
├── Teacher
├── Teaching Philosophy
└── Locations

Resources
└── Learning resources and tools
```

---

## Project Structure

```text
HeartBeatWala/
├── .tanstack/
├── .vscode/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── Constellation.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   ├── PageHeader.tsx
│   │   └── Reveal.tsx
│   ├── data/
│   │   ├── site.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   ├── lib/
│   │   └── utils.ts
│   ├── routes/
│   ├── main.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   └── styles.css
├── .gitignore
├── .prettierignore
└── .prettierrc
```
---

## Development

Clone the repository:

```bash
git clone https://github.com/Petit-DJ/heartbeatwala.git
cd HeartBeatWala
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Format the code:

```bash
npm run format
```

---

## Content

The project currently uses structured data and replaceable placeholders where final HBMC information is not yet available.

Important content such as:

* Teacher information
* Contact details
* Branch information
* Fees
* Timings
* Student testimonials
* Photography

can be replaced without restructuring the entire website.

---

## Project Status

**Phase 1 Public Website**

The current focus is building a polished, practical public-facing website for HBMC.

Authentication, student dashboards, complex backend functionality, and other advanced features are intentionally outside the scope of the first version.

Future iterations may introduce music-learning resources and interactive tools.

---

## Philosophy

> **Come for the instrument. Stay for the people.**

HeartBeatWala is built around a simple idea:

**Music is easier to learn when learning it doesn't feel like you're doing it alone.**
