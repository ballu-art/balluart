# Portfolio Website - One Page Resume

Premium, modern one-page portfolio website for a Senior .NET Software Architect built with Angular 21, TypeScript, and SCSS.

## 🚀 Features

- **Modern Design**: Inspired by premium portfolios (Linear, Stripe, Vercel)
- **Dark/Light Theme**: Toggle between light and dark modes with persistent storage
- **Responsive**: Mobile-first design working seamlessly on all devices
- **Animations**: Smooth scroll reveals, fade-in effects, and micro-interactions
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance**: Optimized for Core Web Vitals with lazy loading and code splitting
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- **PWA Ready**: Service worker support for offline capabilities

## 📋 Sections

1. **Hero** - Professional introduction with call-to-action buttons
2. **About** - Professional summary with key highlights
3. **Skills** - Technical skills categorized with progress indicators
4. **Architecture** - Expertise in architectural patterns
5. **Projects** - Featured portfolio with technology filtering
6. **Experience** - Timeline of professional positions
7. **Certifications** - Industry-recognized credentials
8. **Content** - Articles and technical insights
9. **Testimonials** - Client and colleague recommendations
10. **Contact** - Contact form and social links
11. **Footer** - Social links and quick navigation

## 🛠️ Technology Stack

- **Framework**: Angular 21 (Standalone Components)
- **Language**: TypeScript 5.3
- **Styling**: SCSS with CSS Grid and Flexbox
- **State Management**: Angular Signals
- **Animations**: Angular Animations API
- **Forms**: Reactive Forms
- **Routing**: Angular Router with smooth scrolling

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm start

# Open in browser
http://localhost:4200
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── theme.service.ts
│   │   │   ├── scroll.service.ts
│   │   │   └── index.ts
│   │   └── models/
│   │       └── index.ts
│   ├── sections/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── architecture/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── certifications/
│   │   ├── content/
│   │   ├── testimonials/
│   │   └── contact/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── scroll-to-top/
│   │   └── pipes/
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.component.html
├── assets/
│   ├── images/
│   └── fonts/
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _animations.scss
│   └── index.scss
├── main.ts
└── index.html
```

## 🎨 Customization

### Change Colors

Edit `src/styles/_variables.scss`:

```scss
$primary-color: #2563EB;
$accent-color: #06B6D4;
$bg-dark: #0B1120;
```

### Modify Content

Each section component has sample data. Edit the TypeScript files in `src/app/sections/` to customize:

- Skills and expertise
- Projects and technologies
- Experience timeline
- Certifications
- Contact information

### Add Images

Place images in `src/assets/images/` and reference them in components.

## 🚀 Building for Production

```bash
# Build optimized production bundle
npm run build:prod

# Output will be in dist/dotnet-architect-portfolio
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast colors (WCAG AA)
- Focus management
- Screen reader friendly

## 🔍 SEO

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Canonical URLs
- Mobile-friendly design

## 🌙 Dark Mode

The site automatically detects system preference and allows manual toggle. State persists in localStorage.

## 📊 Performance Optimizations

- OnPush change detection strategy
- Angular Signals for reactive state
- Lazy-loaded components
- Optimized bundle size
- CSS Grid and Flexbox (no framework)
- Minimal dependencies

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Build
npm run build:prod

# Deploy dist folder to GitHub Pages
```

### Azure Static Web Apps

```bash
# Build
npm run build:prod

# Deploy using Azure CLI or portal
```

## 📝 License

© 2024 Baldev Makwana. All rights reserved.

## 🤝 Contributing

Suggestions and improvements are welcome!

## 📞 Contact

- Email: baldev@example.com
- LinkedIn: linkedin.com/in/baldev
- GitHub: github.com/baldev
- Twitter: @baldevmakwana

---

**Built with ❤️ using Angular 21**
