# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding website monorepo for a couple, designed as a mobile-first, accessible platform featuring a React frontend (Vite) and Express.js backend with MongoDB. The project follows the detailed implementation plan in `plan.md`.

## Architecture

**Current Structure:**
- `/frontend/` - React frontend with Vite (port 5173 in dev)
- `server.js` - Basic Express static file server (port 3000)
- Root `package.json` - Contains deployment and dev scripts

**Tech Stack:**
- Frontend: React 19 + Vite 7 + ESLint + React Router DOM
- Backend: Currently basic Express static server (planned: Express.js API + MongoDB)
- Images: Planned to be stored as binary buffers in MongoDB
- Authentication: Planned JWT-based super-admin system

## Development Commands

### Root Level
```bash
npm run dev                # Run frontend dev server (Vite)
npm start                  # Start production server (serves built frontend)
npm run frontend:dev       # Run frontend dev server
npm run frontend:build     # Build frontend for production
npm run frontend:install   # Install frontend dependencies
npm run build              # Install deps and build frontend (used by Heroku)
```

### Frontend (frontend/)
```bash
cd frontend
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Current Server
- Production: `npm start` serves built frontend from `frontend/dist` on port 3000
- Development: `npm run dev` runs Vite dev server on port 5173

## Key Implementation Details

**Backend Architecture (from plan.md):**
- `db/` - MongoDB connection utilities
- `auth/` - Authentication logic, JWT middleware
- `models/` - Mongoose schemas (Photo model stores images as Buffer)
- `controllers/` - Business logic for each resource
- `routers/` - Express route definitions
- `utils/` - Helper functions (image processing with sharp)

**Image Handling:**
- Images stored as binary Buffer in MongoDB Photo model
- Frontend requests images via GET /api/photos/:id/image (returns arraybuffer)
- Upload via multipart/form-data with multer, processed with sharp for optimization
- Frontend converts arraybuffer to Blob URLs for display

**Frontend Features to Implement:**
- Countdown timer to wedding date
- Couple story timeline
- Event schedule
- Photo gallery with lightbox
- Interactive trivia game
- Super-admin interface for content management

## Styling Guidelines

All font sizes must be declared in `App.css` using `clamp()` and applied via CSS utility classes. Mobile-first responsive design with accessibility as a priority (WCAG compliance).

## Authentication

Single super-admin account with JWT-based authentication. Admin routes protected by middleware. Secure file upload validation (mime-type, size limits).

## Development Workflow

1. Frontend development: `npm run dev` (runs Vite dev server on port 5173)
2. Backend implementation: Transform `server.js` into full API server per `plan.md`
3. Database: Connect to MongoDB, implement models with Buffer storage for images
4. API: Build RESTful endpoints for content management
5. Integration: Connect frontend to backend APIs
6. Admin Interface: Secure CRUD operations for content management

## Current State vs Plan

**Implemented:**
- React 19 frontend with Vite and React Router DOM
- Basic Express static file server for production deployment
- Project structure with frontend separation

**To Implement (per plan.md):**
- MongoDB connection and models
- JWT authentication system
- API endpoints for content management
- Image upload/storage system
- Admin interface
- All planned frontend features (countdown, gallery, trivia, etc.)

## Important Notes

- Current `server.js` is a basic static file server - needs expansion for API functionality
- Follow the comprehensive implementation plan in `plan.md`
- Accessibility is a core requirement - use semantic HTML, ARIA roles, keyboard navigation
- The project uses React 19 with modern patterns
- Production server runs on port 3000, development on port 5173
- All font sizes must use `clamp()` in `App.css` for responsive design