# Contributing to Awesome x402 Landing Page

Thank you for your interest in contributing to the Awesome x402 Landing Page! 🎉

## 🚀 Quick Start

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/awesome-x402.git
   cd awesome-x402
   ```
3. **Create** a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make** your changes
5. **Test** locally using a local server
6. **Commit** and **push** your changes
7. **Create** a Pull Request

## 🎯 Types of Contributions

### 🎨 Design Improvements
- UI/UX enhancements
- Animation improvements
- Color scheme updates
- Typography improvements
- Mobile responsiveness fixes

### ⚡ Performance Optimizations
- Load time improvements
- Bundle size reduction
- Caching optimizations
- Image optimizations
- Code splitting

### 🔧 Feature Additions
- New interactive elements
- Enhanced analytics tracking
- Accessibility improvements
- Progressive Web App features
- SEO enhancements

### 📝 Content Updates
- Copy improvements
- Meta description updates
- FAQ additions
- Documentation improvements

### 🐛 Bug Fixes
- Cross-browser compatibility
- Mobile layout issues
- JavaScript errors
- CSS inconsistencies

## 📋 Development Guidelines

### Code Style

#### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels
- Maintain proper indentation (2 spaces)
- Include meaningful `alt` text for images

```html
<!-- Good -->
<section class="hero" aria-label="Hero section">
  <h1 class="hero-title">Awesome x402</h1>
  <img src="logo.png" alt="x402 protocol logo" />
</section>

<!-- Avoid -->
<div class="hero">
  <div class="title">Awesome x402</div>
  <img src="logo.png" />
</div>
```

#### CSS
- Use CSS custom properties for theming
- Follow BEM methodology for class names
- Mobile-first responsive design
- Prefer flexbox/grid over floats

```css
/* Good */
.hero {
  --hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background: var(--hero-bg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--text-primary);
}

/* Mobile first */
@media (min-width: 768px) {
  .hero__title {
    font-size: 4rem;
  }
}
```

#### JavaScript
- Use modern ES6+ syntax
- Include proper error handling
- Add meaningful comments
- Follow functional programming principles

```javascript
// Good
async function fetchReadmeContent() {
  try {
    const response = await fetch(README_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Failed to fetch README:', error);
    throw error;
  }
}

// Track user interactions
function trackEvent(eventName, eventData) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: Date.now()
    });
  }
}
```

### Performance Guidelines

#### 📊 Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

#### 🎯 Optimization Targets
- **Total Bundle Size**: < 500KB
- **First Paint**: < 1s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 95

### Testing Checklist

Before submitting a PR, ensure:

#### ✅ Functionality
- [ ] All buttons and links work correctly
- [ ] README content loads properly
- [ ] GTM events fire correctly
- [ ] Error handling works as expected
- [ ] Smooth scrolling and animations work

#### ✅ Responsive Design
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)  
- [ ] Desktop (1024px+)
- [ ] Large screens (1440px+)

#### ✅ Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### ✅ Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper contrast ratios
- [ ] Focus indicators visible
- [ ] Alt text for images

#### ✅ Performance
- [ ] Lighthouse audit score > 90
- [ ] No console errors
- [ ] Fast loading on 3G
- [ ] Proper image optimization

## 🔧 Local Development Setup

### Prerequisites
- Modern web browser
- Code editor (VS Code recommended)
- Local server capability

### Recommended Extensions (VS Code)
- Live Server
- Prettier
- ESLint
- HTMLHint
- CSS Peek

### Local Testing
```bash
# Clone and navigate
git clone https://github.com/xpaysh/awesome-x402.git
cd awesome-x402

# Start local server (choose one)
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve .

# Option 3: PHP  
php -S localhost:8000

# Option 4: VS Code Live Server extension
# Right-click index.html > "Open with Live Server"
```

### Development Workflow
1. **Make changes** to HTML/CSS/JS files
2. **Refresh browser** to see changes
3. **Test responsiveness** using browser dev tools
4. **Run Lighthouse audit** in Chrome DevTools
5. **Validate HTML** using W3C validator
6. **Check console** for JavaScript errors

## 📈 Analytics & Tracking

### GTM Events to Preserve
When making changes, ensure these events continue to work:

```javascript
// Page tracking
gtmPush({ event: 'page_view', page_title: document.title });

// Button clicks
gtmPush({ event: 'cta_click', cta_name: 'star' });

// External links
gtmPush({ event: 'external_link_click', link_url: href });

// Performance metrics
gtmPush({ event: 'page_performance', load_time: timing });

// User engagement
gtmPush({ event: 'user_engagement', session_time: time });
```

### Testing GTM Events
1. Open browser developer tools
2. Go to Console tab
3. Look for "GTM Event:" logs
4. Verify events are firing correctly

## 🎨 Design System

### Colors
```css
:root {
  /* Primary colors */
  --primary: #2563eb;        /* Blue */
  --secondary: #10b981;      /* Green */  
  --accent: #f59e0b;         /* Yellow */
  
  /* Text colors */
  --text-primary: #111827;   /* Dark gray */
  --text-secondary: #6b7280; /* Medium gray */
  --text-muted: #9ca3af;     /* Light gray */
  
  /* Background colors */
  --bg-primary: #ffffff;     /* White */
  --bg-secondary: #f9fafb;   /* Light gray */
  --bg-tertiary: #f3f4f6;    /* Lighter gray */
}
```

### Typography
```css
/* Font families */
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;

/* Font sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing
```css
/* Spacing scale */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px */
--space-xl: 3rem;      /* 48px */
--space-2xl: 4rem;     /* 64px */
```

## 📝 Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
# Good commit messages
feat(hero): add animated statistics counters
fix(mobile): resolve navigation menu overlap issue
docs(readme): update local development instructions
style(css): improve button hover animations
perf(images): optimize hero background image

# Avoid
Update stuff
Fix bug
Changes
WIP
```

## 🚀 Pull Request Process

### Before Submitting
1. **Test thoroughly** on multiple devices/browsers
2. **Run performance audit** with Lighthouse
3. **Validate HTML** and check for errors
4. **Update documentation** if needed
5. **Write clear commit messages**

### PR Template
```markdown
## 🎯 What does this PR do?
Brief description of changes

## 🧪 How to test
1. Step 1
2. Step 2
3. Expected result

## 📱 Screenshots (if applicable)
Before/after screenshots for visual changes

## ✅ Checklist
- [ ] Tested on multiple browsers
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Documentation updated
```

### Review Process
1. **Automated checks** will run (GitHub Actions)
2. **Maintainer review** for code quality
3. **Testing** on various devices
4. **Merge** after approval

## 🐛 Reporting Issues

### Bug Reports
Please include:
- **Browser** and version
- **Device** type (mobile/desktop)
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)

### Feature Requests
Please include:
- **Use case** description
- **Proposed solution**
- **Alternative solutions** considered
- **Additional context**

## 🎉 Recognition

Contributors will be recognized:
- **README.md** contributors section
- **GitHub contributor graph**
- **Release notes** mentions
- **Social media** shoutouts

## 📞 Getting Help

- **GitHub Issues**: Technical problems
- **GitHub Discussions**: General questions
- **Email**: hello@xpay.sh
- **Discord**: Join the x402 community

Thank you for contributing to make this landing page awesome! 🚀

---

<p align="center">
  <b>🤝 Happy Contributing!</b><br>
  <sub>Every contribution makes the x402 ecosystem stronger</sub>
</p>