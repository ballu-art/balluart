# Portfolio Project - Development Instructions

## Project Overview
Premium one-page portfolio website for a Senior .NET Software Architect built with Angular 21, TypeScript, and SCSS.

## Technology Stack
- **Frontend Framework**: Angular 21 (Standalone Components)
- **Language**: TypeScript 5.3
- **Styling**: SCSS with CSS Grid & Flexbox
- **Features**: 
  - Dark/Light Theme Toggle
  - Angular Signals for State Management
  - Angular Animations
  - Lazy Loading
  - Responsive Design (Mobile-first)
  - WCAG Accessibility Compliance
  - SEO Optimization
  - PWA Support

## Project Structure
```
src/
├── app/
│   ├── core/
│   │   ├── services/        # Theme, Scroll, Analytics services
│   │   └── models/          # Data models and interfaces
│   ├── sections/            # Page sections (Hero, About, Skills, etc.)
│   ├── shared/
│   │   ├── components/      # Reusable components
│   │   └── pipes/           # Custom pipes
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── images/              # Portfolio images
│   └── fonts/               # Custom fonts
├── styles/
│   ├── _variables.scss      # Design tokens
│   ├── _mixins.scss         # Reusable SCSS mixins
│   ├── _animations.scss     # Global animations
│   └── index.scss           # Main stylesheet
├── main.ts
└── index.html
```

## Key Development Guidelines

### Standalone Components
- All components use Angular 21 standalone API
- No NgModule-based architecture
- Proper dependency injection with providedIn

### Angular Signals
- Used for theme state management
- Dark/light mode toggle
- Scroll position tracking
- Component-level state management

### Styling Standards
- No Bootstrap - pure CSS Grid and Flexbox
- Glassmorphism effects with backdrop-filter
- Gradient accents from color palette
- SCSS variables for maintainability
- Mobile-first responsive design

### Animations
- Scroll reveal animations
- Fade-in and slide-up effects
- Parallax effects on hero section
- Hover interactions with smooth transitions
- Micro-animations on buttons and cards

### Performance
- Lazy loading for images
- Code splitting for sections
- OnPush change detection strategy
- Angular Signals for optimal reactivity

### Accessibility (WCAG 2.1 AA)
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Color contrast compliance

### SEO Optimization
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs

## Development Workflow

1. **Component Development**: Create standalone components in sections/
2. **Service Implementation**: Add business logic in core/services/
3. **Styling**: Use SCSS with variables and mixins
4. **Testing**: Run test suite for verification
5. **Performance**: Optimize bundle size and load time
6. **Accessibility**: Validate WCAG compliance

## Build & Deployment

### Development
```
npm install
npm start
```

### Production Build
```
npm run build:prod
```

### Deployment Options
- Vercel (recommended)
- Netlify
- GitHub Pages
- Azure Static Web Apps

## Important Notes
- Production-ready code with error handling
- No external UI frameworks (Bootstrap)
- Responsive across all device sizes
- Performance optimized for web vitals
