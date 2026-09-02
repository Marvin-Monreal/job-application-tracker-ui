# Job Application Tracker — UI

An Angular-based frontend for a full-stack Job Application Tracker designed to help job seekers organize, manage, and monitor their job applications throughout the recruitment process.

The application provides a centralized interface for managing job opportunities, tracking application progress, recording interviews, and viewing job-search activity through a dashboard.

## Project Overview

The Job Application Tracker UI is the frontend application of a full-stack project built to demonstrate modern web development practices using Angular and TypeScript.

The frontend communicates with a separate ASP.NET Core Web API through RESTful HTTP endpoints.

### Related Repository

**Backend API:** `job-application-tracker-api`

> [job-application-tracker-api repository.](https://github.com/Marvin-Monreal/job-application-tracker-api)

---

## Features

### Authentication

- User registration
- User login
- Logout
- Password reset
- Authentication state management
- Protected application routes

### Job Applications

Users can:

- Create job applications
- View application details
- Edit applications
- Delete applications
- Search applications
- Filter applications
- Sort applications
- Track application status
- Store job posting links
- Record salary information
- Add application notes

### Application Status Tracking

Applications can move through different stages of the recruitment process:

- Saved
- Applied
- Screening
- Interview
- Technical Interview
- Final Interview
- Offer
- Accepted
- Rejected
- Withdrawn

### Dashboard

The dashboard provides an overview of the user's job-search activity.

It includes:

- Total applications
- Applications by status
- Active applications
- Upcoming interviews
- Offers
- Recently updated applications

### Interview Tracking

Users can record:

- Interview date and time
- Interview type
- Interviewer
- Meeting link
- Interview notes
- Interview result
- Follow-up date

### Search & Filtering

Applications can be searched and filtered based on information such as:

- Company
- Job title
- Status
- Location
- Employment type
- Work arrangement
- Application date

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Angular | Frontend framework |
| TypeScript | Application programming language |
| HTML | Application structure |
| CSS | Styling and responsive layout |
| RxJS | Reactive programming |
| Supabase Auth | Authentication |
| REST API | Backend communication |
| ASP.NET Core | Backend API |
| Git | Version control |
| GitHub | Source control |

---

## Architecture

The UI is designed as a standalone frontend application communicating with the backend through a REST API.

```text
┌─────────────────────────────┐
│       Angular UI            │
│                             │
│  Components                 │
│  Services                   │
│  Guards                     │
│  Interceptors               │
│  Forms                      │
│  State / Data Management    │
└──────────────┬──────────────┘
               │
               │ HTTPS / REST
               ▼
┌─────────────────────────────┐
│      ASP.NET Core API       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       PostgreSQL            │
│          Supabase           │
└─────────────────────────────┘
```

---

## Project Structure

```text
src/
└── app/
    ├── core/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── services/
    │   └── models/
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   └── pipes/
    │
    ├── features/
    │   ├── auth/
    │   ├── dashboard/
    │   ├── applications/
    │   ├── interviews/
    │   └── profile/
    │
    └── app.routes.ts
```

### Core

Contains application-wide functionality such as:

- Authentication services
- Route guards
- HTTP interceptors
- API configuration
- Shared models

### Shared

Contains reusable UI components and utilities used throughout the application.

### Features

Contains functionality organized around specific business features.

This structure keeps feature-specific code isolated and makes the application easier to maintain as it grows.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Angular CLI
- Git

Verify your installations:

```bash
node --version
npm --version
ng version
```

### Clone the Repository

```bash
git clone https://github.com/<your-username>/job-tracker-ui.git
cd job-tracker-ui
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create the appropriate Angular environment configuration.

Example:

```text
src/environments/
├── environment.ts
└── environment.development.ts
```

Configure values such as:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

Do not commit private secrets or sensitive credentials to GitHub.

### Run the Application

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

---

## Backend API

The frontend communicates with the Job Application Tracker API.

The backend is responsible for:

- Business logic
- Data validation
- Authorization
- Database access
- Job application management
- Interview management
- Dashboard data

Backend repository:

> [job-application-tracker-api repository.](https://github.com/Marvin-Monreal/job-application-tracker-api)

---

## Testing

The project will include frontend tests covering important application behavior.

Run unit tests with:

```bash
ng test
```

Production builds can be tested with:

```bash
ng build
```

---

## Deployment

The Angular application is intended to be deployed using **Vercel**.

Deployment architecture:

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Angular Application
   │
   │ HTTPS
   ▼
ASP.NET Core API
```

The production environment should use the deployed API URL rather than the local development API.

---

## Documentation

Technical documentation is maintained in the backend repository.

Recommended documentation includes:

- Requirements
- Architecture
- API specification
- Database design
- Authentication flow
- Development decisions

---

## Project Goals

This project is being developed as a portfolio project to demonstrate practical skills in:

- Angular
- TypeScript
- REST API integration
- Authentication
- Responsive UI development
- Form handling
- Client-side validation
- API error handling
- Git and GitHub
- Cloud deployment
- Full-stack application architecture

---

## Project Status

**In Development**

Features and architecture may evolve as development progresses.

---

## Author

**Marvin James Monreal**

Full-Stack / Web Developer

GitHub: `https://github.com/MJMonreal`

LinkedIn: `https://www.linkedin.com/in/marvin-james-monreal-9a5037283/`

---

## License

This project is currently intended as a personal portfolio and learning project.
