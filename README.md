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

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
