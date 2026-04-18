# Ankit Kumar Portfolio (Full-Stack)

Modern, responsive developer portfolio with React + TypeScript frontend and Node.js + Express backend.

## Stack

- Frontend: React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express.js
- Databases: MongoDB (projects + contact messages), PostgreSQL (LeetCode stats)

## Folder Structure

```text
ankit-portfolio/
  backend/
    src/
      config/
        mongo.js
        sql.js
      data/
        seedProjects.js
      models/
        ContactMessage.js
        Project.js
      routes/
        api.js
      server.js
    sql/
      schema.sql
    .env.example
    package.json
  frontend/
    public/
      Ankit-Kumar-Resume.txt
    src/
      components/
      hooks/
      api.ts
      App.tsx
      index.css
      types.ts
    .env.example
    tailwind.config.js
    postcss.config.js
    package.json
```

## Features Implemented

- Hero with typing animation
- About section
- Skill categories
- Dynamic projects fetched from backend
- Project filtering (All, Full Stack, Frontend)
- DSA / LeetCode section with progress + badges
- Contact form integrated with backend API
- Dark and light mode toggle
- Scroll animations with Framer Motion
- Loading animation
- Resume download button
- Fully responsive layout

## Backend APIs

- `GET /api/health`
- `GET /api/projects`
- `GET /api/leetcode-stats`
- `POST /api/contact`

## Setup Instructions

### 1) Backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Backend runs on `http://localhost:5000` by default.

### 2) SQL setup (PostgreSQL)

Create database `ankit_portfolio` and run:

```sql
-- from backend/sql/schema.sql
```

If SQL is not configured, backend automatically serves fallback mock LeetCode stats.

### 3) MongoDB setup

Start MongoDB locally or use cloud URI, then set `MONGODB_URI` in backend `.env`.

If MongoDB is unavailable, projects fall back to seed data and contact requests return fallback success mode.

### 4) Frontend setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Notes

- Replace `frontend/public/Ankit-Kumar-Resume.txt` with your real resume PDF if needed.
- Update social/contact links in `frontend/src/components/ContactSection.tsx`.
- Update project links in `backend/src/data/seedProjects.js`.
