# Wedding Website — Implementation Plan

**Tech stack:** React (frontend via Vite) · Express.js (backend) · MongoDB (database — images stored as binary buffers)

**Repository layout:** Single-folder monorepo (both frontend and backend inside one top-level project). Two separate `package.json` files: one for the `frontend/` (Vite + React) and one for the `backend/` (Express + utilities). The backend contains `db`, `auth`, `models`, `controllers`, `routers`, and `utils` directories.

**Purpose:** A mobile-first, accessible wedding website for a couple with public-facing pages (countdown, gallery, schedule, couple story, trivia game) and a secure **super-admin** interface to manage dynamic content.

---

## Table of contents

1. [Overview](#overview)
2. [Features](#features)
3. [High-level architecture & monorepo layout](#high-level-architecture--monorepo-layout)
4. [Frontend — components & structure (Vite)](#frontend---components--structure-vite)
5. [Backend — API, structure & data models (images stored as buffer)](#backend---api-structure--data-models-images-stored-as-buffer)
6. [Admin authentication & security](#admin-authentication--security)
7. [Styling & layout guidelines (App.css)](#styling--layout-guidelines-appcss)
8. [Accessibility requirements](#accessibility-requirements)
9. [Implementation roadmap (step-by-step)](#implementation-roadmap-step-by-step)
10. [Recommended libraries & tools (comparison table)](#recommended-libraries--tools-comparison-table)
11. [Deployment & performance tips](#deployment--performance-tips)
12. [Testing & QA checklist](#testing--qa-checklist)
13. [Appendix — sample snippets (monorepo + image buffer)](#appendix---sample-snippets-monorepo--image-buffer)

---

# Overview

This document describes how to build a responsive, accessible wedding website using React (Vite), Express, and MongoDB. The public site displays a countdown timer, couple story, event schedule, photo gallery, and an interactive trivia game. A single **super admin** account manages dynamic content via a secured admin panel.

Design goals:

- Mobile-first, responsive layout
- All font sizes declared in `App.css` using `clamp()` and controlled via CSS classes
- Accessibility-first (WCAG principles)
- Single-folder monorepo with separate frontend/backend package.json files
- Images stored as binary buffers inside MongoDB (no external object storage required)

---

# Features

- **Countdown timer** to wedding date (auto-switch to "It's today" or livestream link at 00:00)
- **Couple story**: timeline or narrative with milestone dates
- **Event schedule**: ceremony, reception, and other events (time, location, description)
- **Photo gallery**: responsive grid + lightbox/carousel support (images pulled from MongoDB buffer fields)
- **Trivia game**: multiple-choice quiz about the couple with score UI
- **Super-admin interface**: secure CRUD for all content (story, schedule, photos, trivia)
- **Accessibility**: alt text, captions, keyboard navigation, ARIA roles, screen-reader announcements

---

# High-level architecture & monorepo layout

```
wedding-site/                # root monorepo
├─ frontend/                 # Vite + React app
│  ├─ package.json           # frontend dependencies & scripts (vite dev, build)
│  └─ src/
├─ backend/                  # Express API
│  ├─ package.json           # backend dependencies & scripts (start, dev)
│  ├─ server.js (or app.js)
│  ├─ db/                    # DB connection utilities
│  ├─ auth/                  # authentication logic (login, middleware)
│  ├─ models/                # Mongoose schemas (including Photo with buffer field)
│  ├─ controllers/           # controllers for routes
│  ├─ routers/               # express routers
│  └─ utils/                 # helper/util functions
├─ .env                      # environment variables for both (excluded from git)
└─ README.md
```

Notes:

- Frontend and backend live in the same repository for simpler local development and coordinated deployment.
- Each `package.json` contains scripts appropriate to its role. Use a root-level dev script (optional) to run both concurrently with `concurrently` or `pnpm` workspaces if desired.

---

# Frontend — components & structure (Vite)

Use Vite for fast dev server and optimized build. Project scaffold example: `npm create vite@latest frontend -- --template react`.

Suggested component tree (simplified):

```
frontend/src/
├─ App.jsx
├─ App.css        # central font-size vars + theme
├─ main.jsx
├─ components/
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  ├─ Countdown.jsx
│  ├─ Story.jsx
│  ├─ Schedule.jsx
│  ├─ Gallery.jsx
│  ├─ TriviaGame.jsx
│  └─ Admin/ (admin components and forms)
├─ pages/
│  ├─ Home.jsx
│  ├─ AdminDashboard.jsx
│  └─ Login.jsx
└─ services/
   └─ api.js     # axios/fetch wrappers (calls to /api/*)
```

Important frontend considerations:

- Gallery component must request image data from API and convert arraybuffer responses to blob URLs for `<img>`.
- Admin upload form sends image files via `FormData` to backend write endpoint (backend converts file to buffer and stores it in MongoDB).
- Keep font sizes centralized in `App.css` and use CSS classes (per prior requirement).
- Use `aria-live` regions, semantic HTML, and keyboard-accessible controls.

---

# Backend — API, structure & data models (images stored as buffer)

Backend folder contains `db`, `auth`, `models`, `controllers`, `routers`, and `utils`.

## Directory responsibilities

- **db/** — MongoDB connection module (`connectDB.js`) and connection pooling logic.
- **auth/** — login controller, password hashing (bcrypt), JWT issuance, and auth middleware to protect admin routes.
- **models/** — Mongoose schemas. The `Photo` model stores binary data as `Buffer` along with metadata (filename, mimetype, caption, alt, uploadedAt).
- **controllers/** — business logic for each resource (story, schedule, photos, trivia).
- **routers/** — express routers mapping endpoints to controllers.
- **utils/** — helper functions (e.g., sanitize input, validate image type, create thumbnails if needed using sharp).

## Data model notes — storing images in MongoDB as Buffer

Storing images in MongoDB as binary Buffers is supported and keeps assets centralized in the DB (no external storage). Pros: simpler hosting, transactional updates, everything in one place. Cons: increases DB size and may impact DB performance for large image sets; consider using GridFS for very large files. For typical wedding galleries (few dozens or low-resolution images), Buffer is acceptable.

**Photo model (example)**

```js
const PhotoSchema = new mongoose.Schema({
  data: Buffer, // binary image data
  contentType: String, // 'image/jpeg' etc.
  filename: String,
  caption: String,
  alt: String,
  uploadedAt: { type: Date, default: Date.now },
});
```

When serving images to the frontend, return the image as `arraybuffer` (via axios `responseType: 'arraybuffer'`), or provide a base64 data URL in JSON (careful with size). The front-end should prefer `arraybuffer` -> `Blob` -> `URL.createObjectURL()` to avoid base64 memory overhead.

### Example API routes (read + admin write)

- `GET /api/site-config`
- `GET /api/story`
- `GET /api/schedule`
- `GET /api/photos` — returns metadata (id, filename, caption, alt) for gallery thumbnails; individual image fetch via `GET /api/photos/:id/image` to stream the binary data (set `Content-Type` header).
- `GET /api/trivia`

- `POST /api/admin/login`
- `POST /api/photos` — (admin) `multipart/form-data` with file input; server converts to Buffer and stores Photo document.
- `PUT /api/photos/:id` — update metadata
- `DELETE /api/photos/:id`
- ... similar CRUD for story, schedule, trivia

**Important**: For the image endpoint `GET /api/photos/:id/image`, set proper headers:

```js
res.set("Content-Type", photo.contentType);
res.set("Content-Length", photo.data.length);
res.send(photo.data);
```

Or for partial streaming and large files consider GridFS or streaming techniques.

---

# Admin authentication & security

Same as before but note specifics for monorepo:

- **Auth flow:** Admin logs in with `/api/admin/login`. Use `bcrypt` to validate password and `jsonwebtoken` to sign a JWT. Return JWT in an HTTP-only secure cookie or in Authorization header (choose cookie for easier XSRF protections).
- **Protect routes** with auth middleware in `auth/` directory.
- **File validation:** Validate mime-type and maximum filesize on backend before creating Buffer to store in DB (e.g., max 5MB per image). Reject unsupported file types.
- **Rate-limiting / security**: use `express-rate-limit`, `helmet`, `cors` (restrict origins), and input validation for all write operations.

---

# Styling & layout guidelines (App.css)

**Requirement reminder:** All font sizes must be declared in `App.css` using `clamp()` and applied strictly via utility classes.

(Keep the same `:root` tokens, utility classes, and example shown in earlier version — unchanged.)

---

# Accessibility requirements

(Identical to prior section — maintain WCAG compliance: alt text, captions/transcripts, ARIA roles, keyboard focus, color contrast, aria-live announcements for dynamic changes.)

---

# Implementation roadmap (step-by-step)

**Phase 0 — monorepo & tooling**

1. Create root folder `wedding-site/`.
2. `mkdir frontend backend`.
3. Initialize `frontend/package.json` with Vite React template and `backend/package.json` with Express & dev scripts. Optionally add a root-level `package.json` to run both with a single command (using `concurrently`).

**Phase 1 — Scaffold & basic public site (frontend)**

1. Scaffold Vite React app in `frontend/`.
2. Create basic pages/components: Header, Footer, Home, Countdown, Story, Schedule, Gallery (using mock data initially).
3. Implement `App.css` with `clamp()` font tokens.

**Phase 2 — Backend & read-only API**

1. Setup Express app in `backend/`, connect to MongoDB using a `db/connectDB.js` module.
2. Create Mongoose models (`models/Photo.js`, `models/Story.js`, `models/Event.js`, `models/Trivia.js`, `models/Admin.js`), with `Photo` storing binary Buffer.
3. Implement read-only GET endpoints to serve site data. Implement `GET /api/photos/:id/image` to serve binary data.
4. Wire frontend to fetch from these endpoints. For images, request arraybuffers and create Blob URLs.

**Phase 3 — Admin & content management**

1. Implement `auth/` (login controller, middleware). Create super-admin seed script or create admin via API protected by environment flag.
2. Implement `controllers/photosController.js` to accept `multipart/form-data` (use `multer`), convert files to Buffer, validate and store in MongoDB.
3. Implement write endpoints for story, schedule, trivia, with auth protection.
4. Build admin pages in frontend to authenticate, upload images, and manage content (CRUD).

**Phase 4 — polish, accessibility, testing and deployment**

1. Accessibility audits, keyboard/screen reader testing.
2. Performance opt: compress images on upload (use `sharp` in `utils/`) and store optimized buffers.
3. Deploy backend and frontend together (single server serves frontend static build and API) or deploy frontend static to Vercel/Netlify and backend to Render/Heroku. If serving frontend from backend, add an Express static middleware to serve `frontend/dist` build.

---

# Recommended libraries & tools (comparison table)

| Purpose               |            Recommendation | Notes                                                                                          |
| --------------------- | ------------------------: | ---------------------------------------------------------------------------------------------- |
| Build tool            |                      Vite | Fast dev server and optimized builds for React.                                                |
| File upload multipart |                  `multer` | Accept uploads and provide memory storage (gives `buffer`). Use caution with file size limits. |
| Image processing      |                   `sharp` | Resize/compress images before storing buffers to reduce DB load.                               |
| Auth                  |  `jsonwebtoken`, `bcrypt` | JWT for admin auth; bcrypt for hashing.                                                        |
| Forms & validation    | `react-hook-form` + `yup` | Lightweight and accessible-friendly forms.                                                     |
| Accessibility testing |    `axe-core`, Lighthouse | Use in development and CI.                                                                     |
| Dev tooling           | `concurrently` (optional) | Run frontend and backend concurrently in dev if desired.                                       |

---

# Deployment & performance tips

- Because images are stored in MongoDB, compress and resize images on upload (e.g., using `sharp`) to avoid very large DB documents.
- Limit file size in `multer` memory storage (e.g., max 5MB) and validate mime-type.
- For production scale or very many/large photos, consider migrating to GridFS or external storage, but for a typical wedding site (tens of images) buffered storage is acceptable.
- Option A (single server): Build the frontend (`npm run build` in `frontend`) and let Express serve the `frontend/dist` as static assets. This simplifies hosting (one server to deploy).
- Option B (split deployment): Deploy frontend static to Vercel/Netlify and backend to Render/Heroku; configure CORS and env variables accordingly.

---

# Testing & QA checklist

- [ ] Keyboard navigation: can tab and activate all interactive elements
- [ ] Screen reader: headings and landmarks read in logical order
- [ ] All images have `alt` attributes
- [ ] Color contrast tested and meets WCAG AA
- [ ] Forms have associated labels and validation messages
- [ ] ARIA live regions for important dynamic changes (countdown/notifications)
- [ ] Performance: Lighthouse score > 80 on mobile (or as good as possible)
- [ ] Mobile responsiveness across breakpoints
- [ ] Image upload size/mime-type validations enforced on backend

---

# Appendix — sample snippets (monorepo + image buffer)

## backend/models/Photo.js

```js
const mongoose = require("mongoose");
const PhotoSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  filename: String,
  caption: String,
  alt: String,
  uploadedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Photo", PhotoSchema);
```

## backend/controllers/photosController.js (upload handler — simplified)

```js
const multer = require("multer");
const Photo = require("../models/Photo");
const sharp = require("sharp");

// Use multer memory storage to obtain buffer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Express route example
// POST /api/photos
const uploadPhoto = async (req, res) => {
  try {
    const file = req.file; // multer provides buffer
    // optional: resize/compress
    const optimizedBuffer = await sharp(file.buffer)
      .resize({ width: 1600 })
      .jpeg({ quality: 80 })
      .toBuffer();

    const photo = new Photo({
      data: optimizedBuffer,
      contentType: "image/jpeg",
      filename: file.originalname,
      caption: req.body.caption || "",
      alt: req.body.alt || "",
    });

    await photo.save();
    res.json({ id: photo._id, message: "Uploaded" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};

module.exports = { upload, uploadPhoto };
```

## frontend/services/api.js — fetching an image (arraybuffer -> blob URL)

```js
import axios from "axios";

export async function fetchImageBlobUrl(photoId) {
  const res = await axios.get(`/api/photos/${photoId}/image`, {
    responseType: "arraybuffer",
  });
  const blob = new Blob([res.data], { type: res.headers["content-type"] });
  return URL.createObjectURL(blob);
}
```

## backend/server.js — serve frontend build (single-server deploy)

```js
const express = require("express");
const path = require("path");
const app = express();

// API routes go here

// Serve Vite build
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});
```

---

# Final notes

I updated the plan to use Vite, store images as binary buffers in MongoDB, and arrange the project as a single-folder monorepo with both frontend and backend inside it. Backend now follows your requested structure: `db`, `auth`, `models`, `controllers`, `routers`, `utils`.

Next steps I can generate now (pick one):

- Vite React scaffold (files + key components) as a downloadable project structure, or
- Backend scaffold (server.js, connectDB, models, controllers, routers), or
- Full `App.css` with the `clamp()` font variables and utility classes, or
- The `photosController` + `multer` + `sharp` upload flow and example router.
