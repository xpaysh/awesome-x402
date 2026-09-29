# Awesome x402 Landing Page

🚀 A beautiful, modern landing page for the [Awesome x402](https://github.com/xpaysh/awesome-x402) resource list.

## 🌐 Live Site

Visit: **https://xpaysh.github.io/awesome-x402/**

## ✨ Features

- **🎨 Modern Design**: Beautiful, responsive UI with gradient backgrounds and smooth animations
- **⚡ Fast Loading**: Optimized images, minified CSS/JS, and performance-first architecture
- **📱 Mobile-First**: Responsive design that works perfectly on all devices
- **🔍 SEO Optimized**: Meta tags, sitemap, structured data for better discoverability
- **📊 Analytics Ready**: Google Tag Manager integration with comprehensive event tracking
- **♿ Accessible**: Keyboard navigation, ARIA labels, and WCAG compliance
- **🌙 Theme Support**: Automatic dark/light mode based on system preferences
- **🔄 Auto-Sync**: Dynamically loads the latest content from the awesome-x402 repository

## 🏗️ Architecture

### Core Files
- `index.html` - Main page structure with semantic HTML5
- `style.css` - Modern CSS with CSS Grid, Flexbox, and custom properties
- `script.js` - Interactive functionality with GTM integration
- `.github/workflows/pages.yml` - Automated GitHub Pages deployment

### Key Features

#### 🎯 Hero Section
- Eye-catching gradient background with animated elements
- Real-time statistics display (500K+ transactions/week, 2s settlement)
- Three prominent CTAs: Star on GitHub, Contribute, View Repo
- Interactive code preview with syntax highlighting

#### 📚 Dynamic Content
- Fetches latest README.md from the main repository
- Markdown to HTML conversion with syntax highlighting
- Responsive tables and code blocks
- Copy-to-clipboard functionality for code samples

#### 📊 Analytics & Tracking
- Page performance monitoring
- User engagement tracking (scroll depth, session time)
- CTA click tracking with GTM events
- Error tracking and reporting

#### 🚀 Performance Optimizations
- CSS and JavaScript minification
- Image optimization
- Gzip compression
- Browser caching headers
- Preconnect hints for external resources

## 🛠️ Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/xpaysh/awesome-x402.git
   cd awesome-x402
   ```

2. **Serve locally**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Visit**: http://localhost:8000

## 📈 Analytics Setup

### Google Tag Manager Integration

1. **Get GTM Container ID** from Google Tag Manager
2. **Replace placeholders** in `index.html`:
   ```html
   <!-- Replace this -->
   <!-- GTM_HEAD_PLACEHOLDER -->
   
   <!-- With your GTM head snippet -->
   <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
   ```

3. **Replace body placeholder**:
   ```html
   <!-- Replace this -->
   <!-- GTM_BODY_PLACEHOLDER -->
   
   <!-- With your GTM noscript snippet -->
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
   height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   ```

### Tracked Events

- `page_view` - Initial page load
- `cta_click` - Button clicks (star, contribute, repo)
- `external_link_click` - Clicks on external links
- `code_copy` - Code block copy actions
- `readme_loaded` - Successful content load
- `user_engagement` - Session metrics on page exit

## 🚀 Deployment

### Automatic Deployment
Every push to `main` triggers automatic deployment via GitHub Actions:

1. **Build optimizations** (minification, image optimization)
2. **SEO enhancements** (sitemap, robots.txt)
3. **Performance optimizations** (caching headers, compression)
4. **Deploy to GitHub Pages**

### Manual Deployment
```bash
# Commit your changes
git add .
git commit -m "Update landing page"
git push origin main

# GitHub Actions will automatically deploy
```

## 🎨 Customization

### Colors & Branding
Edit CSS custom properties in `style.css`:
```css
:root {
  --primary: #2563eb;
  --secondary: #10b981;
  --accent: #f59e0b;
  /* ... more variables */
}
```

### Content Updates
- **Hero section**: Edit `index.html` hero content
- **Statistics**: Update numbers in hero stats section
- **Footer links**: Modify footer section links
- **Meta tags**: Update SEO meta tags in `<head>`

### Feature Flags
Enable/disable features in `script.js`:
```javascript
const config = {
  enableAnimations: true,
  enablePerformanceTracking: true,
  enableErrorTracking: true,
  enableServiceWorker: false
};
```

## 📱 Progressive Web App

The site includes PWA capabilities:
- Service worker for offline functionality
- Web app manifest for install prompts
- Responsive design for all screen sizes
- Touch-friendly interactions

## 🔧 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

- **Issues**: [GitHub Issues](https://github.com/xpaysh/awesome-x402/issues)
- **Discussions**: [GitHub Discussions](https://github.com/xpaysh/awesome-x402/discussions)
- **Email**: hello@xpay.sh

---

<p align="center">
  <b>🚀 Built with ❤️ by xPay</b><br>
  <sub>Helping the agentic community get paid and pay safely!</sub>
</p>