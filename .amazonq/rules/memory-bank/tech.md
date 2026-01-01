# CloudSentry OpenBlog - Technology Stack

## Core Technologies

### Framework & Runtime

- **Astro 4.0.8**: Modern static site generator with component islands architecture
- **Node.js**: JavaScript runtime (version managed via `.nvmrc`)
- **TypeScript 5.2.2**: Static type checking and enhanced developer experience
- **React 18.3.1**: Used for interactive components within Astro

### Styling & UI

- **Tailwind CSS 3.3.5**: Utility-first CSS framework
- **@tailwindcss/typography**: Enhanced typography styles for content
- **tailwind-merge**: Utility for merging Tailwind classes
- **clsx**: Conditional CSS class utility
- **Manrope Font Family**: Custom web fonts (Regular, Medium, SemiBold, Bold, ExtraBold, ExtraLight, Light)

### Content Management

- **Astro Content Collections**: Built-in content management system
- **MDX 2.0.3**: Enhanced Markdown with JSX component support
- **Tina CMS 1.5.21**: Optional headless CMS for content editing
- **@tinacms/cli**: Command-line tools for Tina CMS

### Development Tools

- **ESLint 8.56.0**: Code linting and quality enforcement
  - `eslint-plugin-astro`: Astro-specific linting rules
  - `eslint-plugin-jsx-a11y`: Accessibility linting
- **Prettier 3.0.3**: Code formatting
  - `prettier-plugin-astro`: Astro component formatting
  - `prettier-config-standard`: Standard formatting configuration
- **Husky 8.0.3**: Git hooks management
- **lint-staged 15.2.0**: Pre-commit linting

### Build & Deployment

- **Astro Build System**: Static site generation
- **Pagefind 1.0.3**: Static search index generation
- **@astrojs/sitemap**: Automatic sitemap generation
- **@astrojs/rss**: RSS feed generation
- **Netlify**: Deployment platform (configured via `netlify.toml`)
- **Vercel**: Alternative deployment option

### Utilities & Libraries

- **reading-time 1.5.0**: Reading time estimation
- **slugify 1.6.6**: URL slug generation
- **mdast-util-to-string**: Markdown AST string extraction
- **motion 10.16.4**: Animation library
- **astro-font 0.0.72**: Font optimization

## Package Management

- **pnpm**: Primary package manager (with `pnpm-lock.yaml`)
- **npm**: Alternative package manager (with `package-lock.json`)
- **.nvmrc**: Node.js version specification

## Development Commands

### Core Development

```bash
# Start development server with Tina CMS
pnpm dev

# Start development server without CMS
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate search index (post-build)
pnpm postbuild
```

### Code Quality

```bash
# Check code formatting
pnpm format:check

# Format code
pnpm format

# Lint code
pnpm lint

# Pre-commit hooks
pnpm pre-commit

# Sync Astro types
pnpm sync
```

### Git Workflow

```bash
# Install Husky hooks
pnpm prepare

# Pre-commit validation (automatic)
# - Prettier formatting
# - ESLint validation
# - TypeScript checking
```

## Configuration Files

### Build Configuration

- **astro.config.mjs**: Astro framework settings, integrations, and build options
- **tsconfig.json**: TypeScript compiler configuration
- **tailwind.config.cjs**: Tailwind CSS customization and theme settings

### Code Quality

- **.eslintrc.cjs**: ESLint rules and parser configuration
- **prettier.config.cjs**: Code formatting rules and plugins
- **.eslintignore**: Files excluded from linting
- **.prettierignore**: Files excluded from formatting

### Deployment

- **netlify.toml**: Netlify build and deployment settings
- **.github/workflows/deploy.yml**: GitHub Actions deployment workflow
- **CNAME**: Custom domain configuration

## Environment & Dependencies

### Node.js Version

- Specified in `.nvmrc` for consistent development environment
- Compatible with modern Node.js LTS versions

### Dependency Management

- **Production Dependencies**: Core runtime requirements (Astro, React, RSS)
- **Development Dependencies**: Build tools, linting, formatting, and CMS
- **Peer Dependencies**: Automatically resolved by package managers

### Browser Support

- Modern browsers with ES2020+ support
- Progressive enhancement for older browsers
- Responsive design for mobile and desktop

## Performance Optimizations

### Build-time Optimizations

- **Static Generation**: All pages pre-rendered at build time
- **Asset Optimization**: Images, fonts, and CSS optimized automatically
- **Tree Shaking**: Unused code eliminated from bundles
- **Code Splitting**: Automatic JavaScript bundle optimization

### Runtime Optimizations

- **Minimal JavaScript**: Only essential client-side code
- **Lazy Loading**: Images and components loaded on demand
- **Service Worker**: Optional for offline functionality
- **CDN Ready**: Optimized for content delivery networks
