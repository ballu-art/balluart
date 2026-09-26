# Development Guide

## Code Standards

### TypeScript

- Use strict mode enabled in `tsconfig.json`
- Prefer `const` over `let`, avoid `var`
- Use type annotations for function parameters and returns
- Avoid `any` type - use proper typing
- Use interfaces for data structures

### Angular

- Use standalone components (Angular 21+)
- Implement OnDestroy to clean up subscriptions
- Use OnPush change detection strategy
- Prefer Angular Signals over RxJS where appropriate
- Use proper dependency injection

### SCSS

- Use variables defined in `_variables.scss`
- Use mixins for reusable patterns
- Follow BEM naming convention: `.block__element--modifier`
- Mobile-first responsive design
- Use custom properties (CSS variables) for theming

### HTML

- Use semantic HTML elements
- Include ARIA labels for accessibility
- Use proper heading hierarchy (h1, h2, h3)
- Provide alt text for images
- Use descriptive link text

## Naming Conventions

### Files
- Components: `component-name.component.ts`
- Services: `service-name.service.ts`
- Pipes: `pipe-name.pipe.ts`
- Directives: `directive-name.directive.ts`
- Models: `model-name.ts`

### CSS Classes
```scss
.section-name { }
.section-name__element { }
.section-name__element--modifier { }
```

### Variables & Functions
- Use camelCase: `myVariable`, `myFunction()`
- Use PascalCase for classes: `MyClass`
- Use UPPER_SNAKE_CASE for constants: `MY_CONSTANT`

## Component Structure

```
my-component/
├── my-component.component.ts       # Component logic
├── my-component.component.html     # Template
├── my-component.component.scss     # Styles
└── my-component.component.spec.ts  # Tests (when applicable)
```

## Testing

Run tests:
```bash
npm test
```

Run specific test file:
```bash
npm test -- --include='**/specific.component.spec.ts'
```

## Linting

Run linter:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint -- --fix
```

## Git Workflow

### Branches
- `main` - Production ready code
- `develop` - Development branch
- `feature/description` - Feature branches
- `bugfix/description` - Bug fix branches

### Commits
- Use descriptive commit messages
- Use conventional commits format:
  ```
  feat: add new feature
  fix: fix bug
  docs: update documentation
  style: format code
  refactor: refactor component
  test: add tests
  chore: update dependencies
  ```

## Performance Optimization

- Use `trackBy` in `*ngFor` loops
- Lazy load routes and components
- Implement OnPush change detection
- Use Angular Signals for reactive state
- Minimize bundle size
- Optimize images and assets

## Accessibility (A11y)

- Use semantic HTML
- Include ARIA labels
- Ensure color contrast (WCAG AA)
- Support keyboard navigation
- Test with screen readers
- Provide alt text for images

## SEO Best Practices

- Use descriptive meta tags
- Include Open Graph tags
- Implement structured data (JSON-LD)
- Create descriptive page titles
- Use descriptive URLs
- Optimize images with alt text

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Useful Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [Web.dev Performance](https://web.dev/performance)

---

For questions or issues, please refer to the main README.md
