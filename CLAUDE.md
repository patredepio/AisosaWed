# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding website monorepo for a couple, designed as a mobile-first, accessible platform featuring a React frontend (Vite) and Express.js backend with MongoDB. The project follows the detailed implementation plan in `plan.md`.

## Architecture

**Monorepo Structure:**
- `/client/` - React frontend with Vite (port typically 5173 in dev)
- `/server/` - Express.js backend (currently empty, needs implementation)
- Root `package.json` - Contains concurrently and nodemon for development orchestration

**Tech Stack:**
- Frontend: React 19 + Vite 7 + ESLint
- Backend: Express.js + MongoDB (planned)
- Images: Stored as binary buffers in MongoDB
- Authentication: JWT-based super-admin system

## Development Commands

### Root Level (Recommended)
```bash
npm run dev                # Run both frontend and backend concurrently
npm run frontend:dev       # Run only frontend (Vite dev server)
npm run backend:dev        # Run only backend (Express API with nodemon)
npm run install:all        # Install dependencies for both frontend and backend
npm run frontend:build     # Build frontend for production
```

### Frontend (frontend/)
```bash
cd frontend
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend (backend/)
```bash
cd backend
npm run dev       # Start Express server with nodemon (http://localhost:3001)
npm start         # Start Express server in production mode
npm install       # Install backend dependencies
```

### API Endpoints
- Health check: `http://localhost:3001/api/health`

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

1. Frontend development: `cd client && npm run dev`
2. Backend setup: Implement Express server in `/server/` with planned directory structure
3. Database: Connect to MongoDB, implement models with Buffer storage for images
4. API: Build RESTful endpoints for content management
5. Integration: Connect frontend to backend APIs
6. Admin Interface: Secure CRUD operations for content management

## Important Notes

- Backend is set up with basic Express server and ready for development
- Follow the comprehensive implementation plan in `plan.md`
- Images are stored in MongoDB as buffers (no external storage)
- Accessibility is a core requirement - use semantic HTML, ARIA roles, keyboard navigation
- The project uses React 19 with modern patterns
- Backend runs on port 3001, frontend on port 5173
- Use `npm run dev` from root to start both servers concurrently