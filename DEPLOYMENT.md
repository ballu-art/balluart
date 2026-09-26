# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Local Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open browser to http://localhost:4200
```

### Build

```bash
# Development build
npm run build

# Production build (optimized)
npm run build:prod
```

## Deployment Platforms

### 1. Vercel (Recommended)

Vercel is optimized for Angular and provides excellent performance.

**Steps:**

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Configure settings:
   - Framework: Angular
   - Build Command: `npm run build:prod`
   - Output Directory: `dist/dotnet-architect-portfolio`
6. Click "Deploy"

**Environment Variables:**

```
NODE_ENV=production
```

### 2. Netlify

**Steps:**

1. Build locally: `npm run build:prod`
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure settings:
   - Build command: `npm run build:prod`
   - Publish directory: `dist/dotnet-architect-portfolio`
6. Click "Deploy site"

**netlify.toml configuration:**

```toml
[build]
  command = "npm run build:prod"
  publish = "dist/dotnet-architect-portfolio"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Steps:**

1. Update `angular.json` with your repository name:
   ```json
   "outputPath": "dist/<repository-name>"
   ```

2. Build: `npm run build:prod`

3. Deploy using `angular-cli-ghpages`:
   ```bash
   npm install -g angular-cli-ghpages
   ngh --dir=dist/dotnet-architect-portfolio
   ```

### 4. Azure Static Web Apps

**Steps:**

1. Create a new Static Web App in Azure Portal
2. Connect to your GitHub repository
3. Configure build settings:
   - Build Preset: Angular
   - App location: `/`
   - Output location: `dist/dotnet-architect-portfolio`
4. Review and create

### 5. Docker

**Dockerfile:**

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist/dotnet-architect-portfolio /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and run:**

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Production Checklist

- [ ] Update portfolio content (name, email, links)
- [ ] Replace placeholder images with actual photos
- [ ] Verify all links are correct
- [ ] Test form functionality
- [ ] Enable analytics (Google Analytics, etc.)
- [ ] Set up email forwarding for contact form
- [ ] Configure custom domain
- [ ] Enable HTTPS/SSL
- [ ] Set up CDN for assets
- [ ] Enable caching headers
- [ ] Test on multiple devices and browsers
- [ ] Verify SEO meta tags
- [ ] Test accessibility with screen readers
- [ ] Check performance with Lighthouse
- [ ] Monitor error logs

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Enter your domain
3. Follow DNS configuration instructions
4. Update domain registrar's nameservers

### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records at your registrar

### Azure

1. Go to Custom domains
2. Add your domain
3. Follow DNS configuration
4. Update domain registrar

## SSL/TLS Certificate

Most platforms (Vercel, Netlify, Azure) provide free SSL certificates. Enable automatic HTTPS.

## Performance Optimization

### Enable Caching

**Vercel** - Automatic caching headers
**Netlify** - Configure in `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "no-cache, no-store, must-revalidate"
```

### Minification & Compression

Already handled by Angular production build.

### Image Optimization

- Use WebP format for modern browsers
- Implement lazy loading
- Use responsive images

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Error Tracking (Sentry)

```bash
npm install @sentry/angular-ivy
```

## Maintenance

- Update dependencies regularly: `npm update`
- Keep Angular and TypeScript versions current
- Monitor error logs
- Review analytics
- Update portfolio content quarterly
- Test functionality after updates

## Troubleshooting

### Build fails
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version`
- Review build logs for errors

### Site not loading
- Check deployment logs
- Verify build output directory
- Ensure environment variables are set
- Check CORS settings if needed

### SEO issues
- Verify meta tags in `index.html`
- Check robots.txt and sitemap.xml
- Use Google Search Console
- Test with Lighthouse

## Support

For issues or questions:
- Check GitHub Discussions
- Open an Issue on GitHub
- Contact via website form

---

Last Updated: May 24, 2024
