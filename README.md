# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (bundled with Node.js)

### Install dependencies

```bash
npm install
```

### Run the application

The app requires two processes running at the same time. Open **two terminals**
from the project root:

**Terminal 1 — mock API (json-server on port 3000):**

```bash
npm run api
```

**Terminal 2 — development server (Vite on port 5173):**

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Login credentials

| Username  | Password  | Sites visible            |
| --------- | --------- | ------------------------ |
| demouser1 | password1 | Demo site 1, Demo site 2 |
| demouser2 | password2 | Demo site 3              |
| demouser3 | password1 | No site                  |

> Passwords are stored as SHA-256 hashes in `db.json`. The plain-text value is provided above

### Available scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the Vite development server         |
| `npm run api`   | Start the json-server mock API            |
| `npm run build` | Type-check and produce a production build |
| `npm run lint`  | Run ESLint across all source files        |
| `npm test`      | Run the Vitest test suite (watch mode)    |

### Project structure

```
src/
├── api/              # API client, typed fetch helpers, ApiError class
├── components/       # Shared UI components (AppLayout, ProtectedRoute, …)
├── features/
│   ├── auth/         # AuthContext, AuthProvider, LoginPage
│   ├── devices/      # DeviceCard, StatusBadge, useDevices
│   └── sites/        # SitesPage, SiteDetailPage, SiteCard, useSites, useSite
├── test/             # MSW handlers, server, renderWithProviders helper
└── types/            # Shared TypeScript interfaces (Site, Device, User)
```
