# CloudSentry OpenBlog - Project Structure

## Directory Architecture

### Root Level Configuration

```
├── astro.config.mjs          # Astro framework configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.cjs       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.cjs            # ESLint rules and settings
├── prettier.config.cjs      # Code formatting configuration
└── netlify.toml             # Netlify deployment settings
```

### Source Code Organization (`src/`)

```
src/
├── components/              # Reusable UI components
│   ├── icons/              # SVG icon components
│   ├── mdx/                # MDX-specific components
│   ├── BaseHead.astro      # HTML head metadata
│   ├── Header.astro        # Site navigation
│   ├── Footer.astro        # Site footer
│   ├── PostCard.astro      # Blog post preview cards
│   ├── Pagination.astro    # Page navigation
│   ├── Search.astro        # Search functionality
│   ├── TableOfContents.astro # Auto-generated TOC
│   └── ToggleTheme.astro   # Dark/light mode switcher
├── content/                # Content collections
│   ├── blog/               # Blog post markdown files
│   └── config.ts           # Content schema definitions
├── data/                   # Configuration and static data
│   ├── site.config.ts      # Site-wide settings
│   ├── categories.ts       # Blog categories
│   ├── links.ts            # Social media links
│   └── disqus.config.ts    # Comment system config
├── layouts/                # Page layout templates
│   ├── BaseLayout.astro    # Base HTML structure
│   └── BlogPost.astro      # Blog post layout
├── pages/                  # Route definitions
│   ├── category/           # Category archive pages
│   ├── post/               # Individual blog posts
│   ├── tags/               # Tag archive pages
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   ├── privacy.astro       # Privacy policy
│   ├── terms.astro         # Terms of service
│   └── rss.xml.ts          # RSS feed generation
├── styles/                 # Global CSS styles
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
    ├── post.ts             # Post processing utilities
    ├── readTime.ts         # Reading time calculation
    ├── sluglify.ts         # URL slug generation
    └── cn.ts               # CSS class utilities
```

### Content Management (`tina/`)

```
tina/
├── __generated__/          # Auto-generated Tina files
│   ├── types.ts            # TypeScript types
│   ├── client.ts           # GraphQL client
│   └── queries.gql         # GraphQL queries
├── config.ts               # Tina CMS configuration
└── tina-lock.json          # Dependency lock file
```

### Public Assets (`public/`)

```
public/
├── admin/                  # Tina CMS admin interface
├── fonts/                  # Web font files (Manrope family)
├── favicon.svg             # Site favicon
├── open-graph.png          # Social media preview image
├── robots.txt              # Search engine directives
└── CNAME                   # Custom domain configuration
```

## Core Components & Relationships

### Layout Hierarchy

- **BaseLayout.astro**: Root layout providing HTML structure, meta tags, and theme support
- **BlogPost.astro**: Specialized layout for blog posts with TOC, sharing, and comments
- **TitlePage.astro**: Reusable page title component

### Content Flow

1. **Content Creation**: Markdown/MDX files in `src/content/blog/`
2. **Schema Validation**: Content validated against `src/content/config.ts`
3. **Processing**: Utilities in `src/utils/` handle slug generation, reading time, etc.
4. **Rendering**: Components assemble final pages using layouts and data

### Data Management

- **Site Configuration**: Centralized in `src/data/site.config.ts`
- **Categories**: Defined in `src/data/categories.ts` with Zod validation
- **Content Collections**: Astro's built-in content management system

## Architectural Patterns

### Static Site Generation

- **Build-time Rendering**: All pages pre-generated for optimal performance
- **Dynamic Routes**: Category and tag pages generated from content
- **Asset Optimization**: Images and fonts optimized during build

### Component Architecture

- **Astro Components**: Server-side rendered with minimal client-side JavaScript
- **Utility-First CSS**: Tailwind CSS for consistent styling
- **TypeScript Integration**: Full type safety across components and utilities

### Content Management Strategy

- **File-based CMS**: Markdown files as primary content source
- **Optional GUI**: Tina CMS for non-technical content creators
- **Version Control**: All content tracked in Git for collaboration

### Performance Optimization

- **Minimal JavaScript**: Only essential client-side code
- **Image Optimization**: Automatic image processing and lazy loading
- **CSS Purging**: Unused styles removed during build
- **Search Integration**: Static search index for fast client-side search
