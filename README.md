# Portfolio Website

A modern, minimal portfolio website built with React, TypeScript, and Vite, featuring smooth animations and a clean design.

## Features

- 🎨 Minimal design with smooth animations
- 📱 Fully responsive layout
- 🌓 Dark/Light theme support
- ⚡ Fast performance with Vite
- 🔒 Type-safe with TypeScript
- ✅ Automated code quality checks

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

The project includes automated code quality checks:

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run all checks (lint + type-check + build)
npm run ci
```

## CI/CD

### GitHub Actions

The repository includes automated CI/CD workflows that run on every push and pull request:

- **Lint**: Checks code style and quality with ESLint
- **Type Check**: Validates TypeScript types
- **Build**: Ensures the project builds successfully
- **Quality Gate**: All checks must pass before merging

### Dependabot

Dependabot is configured to automatically:

- Check for dependency updates weekly (Mondays at 9:00 AM)
- Create pull requests for updates
- Group updates by dependency type (production/development)
- Ignore major version updates for critical packages (React, TypeScript)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **Lucide React** - Icons

## ESLint Configuration

This project uses ESLint 9 with the flat config format. The configuration is located in `eslint.config.js` and includes:

- TypeScript ESLint rules
- React Hooks linting
- React Refresh rules
- Recommended JavaScript rules

To customize ESLint rules, edit `eslint.config.js`. For more information, see the [ESLint documentation](https://eslint.org/docs/latest/use/configure/configuration-files).
