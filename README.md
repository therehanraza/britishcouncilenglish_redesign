# British Council English Redesign

A full-stack redesign of the British Council India English courses experience, built as a production-style portfolio project with a React frontend, Express backend, MongoDB persistence, and live deployments on Vercel and Render.

Live site: https://britishcouncilenglish-redesign.vercel.app  
Backend API: https://britishcouncil-api.onrender.com

## Overview

This project redesigns the public English learning journey into a modern, responsive, content-driven web application. The frontend preserves a polished editorial layout, while the backend powers page content, home content, events, library resources, blog posts, search, navigation/footer configuration, and form submissions.

## Tech Stack

- React 19
- Vite
- React Router
- Express
- MongoDB Atlas
- Mongoose
- Render for backend deployment
- Vercel for frontend deployment

## Features

- Responsive British Council-inspired UI for desktop and mobile
- MongoDB-backed content for all major pages
- Backend-driven home page hero, pathways, and featured updates
- Backend-driven navigation and footer content
- Backend search across pages, events, library resources, blog posts, and home content
- Contact form submission stored in MongoDB
- Newsletter signup stored in MongoDB with duplicate email protection
- Protected admin read endpoints using `x-admin-api-key`
- Rate-limited public form APIs
- Security headers with Helmet
- CORS restricted to the deployed frontend and local development
- Health check endpoint for production monitoring
- Top loading progress bar and styled loading/error states

## Main Routes

- `/`
- `/learn-english`
- `/take-exam`
- `/study-uk`
- `/our-work`
- `/events`
- `/library`
- `/blog`
- `/search`
- `/newsletter`
- `/contact`

## API Endpoints

- `GET /`
- `GET /api/health`
- `GET /api/site/chrome`
- `GET /api/home`
- `GET /api/pages`
- `GET /api/pages/:slug`
- `GET /api/events`
- `GET /api/library/resources`
- `GET /api/blog/posts`
- `GET /api/search?q=library`
- `POST /api/contact`
- `POST /api/newsletter`

Protected admin endpoints:

- `GET /api/contact`
- `GET /api/newsletter`

Admin requests require:

```http
x-admin-api-key: your-admin-key
```

## Local Setup

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create frontend environment file:

```env
VITE_API_URL=http://localhost:5000/api
```

Create backend environment file in `backend/.env`:

```env
PORT=5000
MONGO_URI=your-mongodb-atlas-connection-string
CLIENT_ORIGINS=http://localhost:5173,https://britishcouncilenglish-redesign.vercel.app
ADMIN_API_KEY=your-long-random-admin-key
```

Run the backend:

```bash
cd backend
npm run dev
```

Run the frontend:

```bash
npm run dev
```

## Deployment

Frontend is deployed on Vercel.

Recommended Vercel environment variable:

```env
VITE_API_URL=https://britishcouncil-api.onrender.com/api
```

Backend is deployed on Render.

Recommended Render settings:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Health endpoint: `/api/health`

Recommended Render environment variables:

```env
MONGO_URI=your-mongodb-atlas-connection-string
CLIENT_ORIGINS=https://britishcouncilenglish-redesign.vercel.app
ADMIN_API_KEY=your-long-random-admin-key
```

## Production Notes

The backend auto-seeds default content for home, events, library resources, blog posts, and site navigation/footer if those collections are empty. This keeps first deploys simple while still making the application MongoDB-backed.

Secrets are intentionally excluded from the repository. Rotate database credentials if they are ever shared outside the deployment environment.
