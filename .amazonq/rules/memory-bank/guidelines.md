# CloudSentry OpenBlog - Development Guidelines

## Code Quality Standards

### TypeScript Usage Patterns

- **Strict Type Safety**: All files use TypeScript with strict type checking enabled
- **Interface Definitions**: Clear interface definitions for configuration objects (e.g., `DisqusConfig`, `SiteConfig`)
- **Type Imports**: Use `type` keyword for type-only imports: `import { type ClassValue } from 'clsx'`
- **Generated Types**: Auto-generated types from Tina CMS are marked with `//@ts-nocheck` and warning comments
- **Generic Types**: Extensive use of generic types for flexible, reusable functions (e.g., `Maybe<T>`, `Exact<T>`)

### Code Formatting & Structure

- **Tab Indentation**: Consistent use of tabs for indentation across all files
- **Single Quotes**: String literals use single quotes consistently
- **Semicolons**: All statements end with semicolons
- **Trailing Commas**: Objects and arrays use trailing commas for cleaner diffs
- **Line Length**: Code formatted to maintain readability with reasonable line lengths

### Import Organization

- **Astro Imports First**: Astro-specific imports at the top: `import { getCollection } from 'astro:content'`
- **Path Aliases**: Use `@/` alias for src directory imports: `import { CATEGORIES } from '@/data/categories'`
- **Grouped Imports**: Related imports grouped together with clear separation

## Architectural Patterns

### Content Management Patterns

- **Collection-Based Architecture**: Use Astro's content collections for blog posts
- **Draft Filtering**: Consistent filtering of draft posts across all utilities:
  ```typescript
  .filter((post) => !post.data.draft)
  ```
- **Date Sorting**: Standard descending date sort for post listings:
  ```typescript
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  ```

### Data Processing Patterns

- **Set-Based Deduplication**: Use `Set` for removing duplicates, then convert to arrays:
  ```typescript
  const categories = new Set(posts.map((post) => post.data.category))
  return Array.from(categories)
  ```
- **Case-Insensitive Matching**: Normalize strings to lowercase for comparisons:
  ```typescript
  const lowercaseTag = tag.toLowerCase()
  return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
  ```

### Configuration Management

- **Validation Functions**: Implement validation for configuration objects:
  ```typescript
  const validateDisqusConfig = (config: DisqusConfig): void => {
  	if (config.enabled && !config.shortname.trim()) {
  		throw new Error('Disqus shortname is required when enabled')
  	}
  }
  ```
- **Error Handling**: Graceful error handling with informative messages
- **Environment-Based Config**: Use environment variables for deployment-specific settings

## Utility Function Patterns

### Async Function Design

- **Async/Await**: Consistent use of async/await for asynchronous operations
- **Collection Processing**: Standard pattern for processing Astro content collections
- **Optional Parameters**: Use optional parameters with sensible defaults:
  ```typescript
  export const getPosts = async (max?: number) => {
  	return posts.slice(0, max)
  }
  ```

### CSS Utility Patterns

- **Class Merging**: Use `clsx` and `tailwind-merge` for conditional CSS classes:
  ```typescript
  export function cn(...inputs: ClassValue[]) {
  	return twMerge(clsx(inputs))
  }
  ```
- **Spread Operator**: Use spread operator for flexible function parameters

### Data Transformation

- **Array Methods**: Extensive use of functional array methods (filter, map, sort, slice)
- **Method Chaining**: Chain array methods for readable data transformations
- **Empty String Filtering**: Filter out empty strings in tag processing:
  ```typescript
  if (tag !== '') {
  	tags.add(tag.toLowerCase())
  }
  ```

## CMS Integration Standards

### Tina CMS Configuration

- **Schema Definition**: Comprehensive schema definitions with proper field types
- **Field Validation**: Required fields marked explicitly with `required: true`
- **UI Components**: Custom UI components for specific field types (e.g., tags)
- **Rich Text Templates**: Custom templates for rich text content with reusable components

### GraphQL Integration

- **Fragment Usage**: Use GraphQL fragments for reusable query parts
- **Type Generation**: Auto-generate TypeScript types from GraphQL schema
- **Client Configuration**: Centralized client configuration with environment-based URLs

## Error Handling & Validation

### Configuration Validation

- **Runtime Validation**: Validate configuration at runtime with descriptive errors
- **Try-Catch Blocks**: Proper error handling with informative console messages
- **Type Guards**: Use TypeScript for compile-time validation

### Data Processing Safety

- **Null Checks**: Handle potential null/undefined values in data processing
- **Array Safety**: Check for empty arrays and handle edge cases
- **String Validation**: Trim strings and check for empty values

## Performance Optimization Patterns

### Data Fetching

- **Single Collection Calls**: Minimize calls to `getCollection()` by reusing results
- **Efficient Filtering**: Combine multiple filters in single passes through data
- **Lazy Loading**: Use optional parameters to limit data when not all is needed

### Memory Management

- **Set Usage**: Use `Set` for O(1) lookups and automatic deduplication
- **Array Slicing**: Use `slice()` for limiting results without mutating original arrays
- **Functional Programming**: Prefer immutable operations over mutations

## Naming Conventions

### Function Names

- **Descriptive Verbs**: Functions start with verbs (get, filter, validate)
- **Specific Purpose**: Names clearly indicate function purpose (e.g., `getPostByTag`, `filterPostsByCategory`)
- **Async Indication**: Async functions clearly indicate their asynchronous nature

### Variable Names

- **Camel Case**: Consistent camelCase for variables and functions
- **Descriptive Names**: Variables have clear, descriptive names
- **Type Suffixes**: Configuration objects often end with "Config"

### File Organization

- **Purpose-Based Naming**: Files named after their primary purpose (post.ts, disqus.config.ts)
- **Utility Grouping**: Related utilities grouped in same files
- **Configuration Separation**: Configuration files clearly separated from logic
