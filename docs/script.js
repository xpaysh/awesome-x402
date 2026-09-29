// ===== GLOBAL VARIABLES =====
window.dataLayer = window.dataLayer || [];

// ===== UTILITY FUNCTIONS =====
function gtmPush(eventData) {
    if (window.dataLayer) {
        window.dataLayer.push(eventData);
        console.log('GTM Event:', eventData);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== MARKDOWN RENDERING =====
async function fetchAndRenderReadme() {
    const readmeContainer = document.getElementById('readme-content');
    const rawReadmeUrl = 'https://raw.githubusercontent.com/xpaysh/awesome-x402/main/README.md';
    
    try {
        // Show loading state
        readmeContainer.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <p>Loading awesome resources...</p>
            </div>
        `;
        
        // Fetch README content
        const response = await fetch(rawReadmeUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const markdownContent = await response.text();
        
        // Configure marked options for better rendering
        marked.setOptions({
            breaks: true,
            gfm: true,
            sanitize: false,
            smartypants: true,
            highlight: function(code, lang) {
                if (window.Prism && lang && Prism.languages[lang]) {
                    return Prism.highlight(code, Prism.languages[lang], lang);
                }
                return code;
            }
        });
        
        // Convert markdown to HTML
        const htmlContent = marked.parse(markdownContent);
        
        // Create a wrapper div with padding
        const contentWrapper = document.createElement('div');
        contentWrapper.style.padding = '2rem';
        contentWrapper.innerHTML = htmlContent;
        
        // Update the container
        readmeContainer.innerHTML = '';
        readmeContainer.appendChild(contentWrapper);
        
        // Post-process the rendered content
        postProcessReadmeContent(contentWrapper);
        
        // Track successful load
        gtmPush({
            'event': 'readme_loaded',
            'readme_source': 'github_raw',
            'content_length': markdownContent.length
        });
        
    } catch (error) {
        console.error('Error fetching README:', error);
        
        // Show error state with fallback
        readmeContainer.innerHTML = `
            <div style="padding: 2rem; text-align: center;">
                <h2 style="color: #ef4444; margin-bottom: 1rem;">⚠️ Unable to Load Content</h2>
                <p style="color: #6b7280; margin-bottom: 2rem;">
                    We couldn't load the latest resources. Please visit the GitHub repository directly.
                </p>
                <a href="https://github.com/xpaysh/awesome-x402" 
                   class="btn btn-primary" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div>
        `;
        
        // Track error
        gtmPush({
            'event': 'readme_error',
            'error_type': 'fetch_failed',
            'error_message': error.message
        });
    }
}

// ===== POST-PROCESS README CONTENT =====
function postProcessReadmeContent(container) {
    // Make all external links open in new tabs
    const links = container.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Add click tracking for external links
        link.addEventListener('click', (e) => {
            gtmPush({
                'event': 'external_link_click',
                'link_url': link.href,
                'link_text': link.textContent.trim().substring(0, 50)
            });
        });
    });
    
    // Convert anchor links to GitHub repository links
    const anchorLinks = container.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        const anchor = link.getAttribute('href');
        // Convert local anchor links to GitHub repository links
        const githubUrl = `https://github.com/xpaysh/awesome-x402?tab=readme-ov-file${anchor}`;
        link.setAttribute('href', githubUrl);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        link.addEventListener('click', (e) => {
            gtmPush({
                'event': 'anchor_link_click',
                'anchor_target': anchor.split('#')[1],
                'github_url': githubUrl
            });
        });
    });
    
    // Enhance tables with responsive wrapper
    const tables = container.querySelectorAll('table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.style.overflowX = 'auto';
        wrapper.style.margin = '1rem 0';
        wrapper.style.border = '1px solid var(--border)';
        wrapper.style.borderRadius = 'var(--radius-md)';
        
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
    
    // Add copy buttons to code blocks
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach((codeBlock, index) => {
        const pre = codeBlock.parentElement;
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.2s;
        `;
        
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
                
                gtmPush({
                    'event': 'code_copy',
                    'code_block_index': index,
                    'code_length': codeBlock.textContent.length
                });
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);
    });
    
    // Highlight syntax if Prism is available
    if (window.Prism) {
        Prism.highlightAllUnder(container);
    }
    
    // Add smooth scrolling for anchor links
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.style.scrollMarginTop = '5rem'; // Account for fixed navbar
        
        // Add hover effect for headings
        heading.addEventListener('mouseenter', () => {
            heading.style.color = 'var(--primary)';
            heading.style.transition = 'color 0.2s';
        });
        
        heading.addEventListener('mouseleave', () => {
            heading.style.color = '';
        });
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Hide/show navigation on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        // Change nav background opacity based on scroll
        if (currentScrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// ===== BUTTON EVENT HANDLERS =====
function initButtonHandlers() {
    // Star button
    const starBtn = document.getElementById('star-btn');
    if (starBtn) {
        starBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Track GTM event
            gtmPush({
                'event': 'cta_click',
                'cta_name': 'star',
                'cta_location': 'hero',
                'timestamp': Date.now()
            });
            
            // Add visual feedback
            starBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                starBtn.style.transform = '';
            }, 150);
            
            // Delay then redirect
            await delay(300);
            window.open('https://github.com/xpaysh/awesome-x402', '_blank', 'noopener,noreferrer');
        });
    }
    
    // Contribute button
    const contribBtn = document.getElementById('contrib-btn');
    if (contribBtn) {
        contribBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Track GTM event
            gtmPush({
                'event': 'cta_click',
                'cta_name': 'contribute',
                'cta_location': 'hero',
                'timestamp': Date.now()
            });
            
            // Add visual feedback
            contribBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                contribBtn.style.transform = '';
            }, 150);
            
            // Delay then redirect
            await delay(300);
            window.open('https://github.com/xpaysh/awesome-x402/blob/main/CONTRIBUTING.md', '_blank', 'noopener,noreferrer');
        });
    }
    
    // Repo link button
    const repoLinkBtn = document.getElementById('repo-link-btn');
    if (repoLinkBtn) {
        repoLinkBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Track GTM event
            gtmPush({
                'event': 'cta_click',
                'cta_name': 'repo_link',
                'cta_location': 'hero',
                'timestamp': Date.now()
            });
            
            // Add visual feedback
            repoLinkBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                repoLinkBtn.style.transform = '';
            }, 150);
            
            // Delay then redirect
            await delay(300);
            window.open('https://github.com/xpaysh/awesome-x402', '_blank', 'noopener,noreferrer');
        });
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Track navigation
                gtmPush({
                    'event': 'navigation_click',
                    'nav_target': this.getAttribute('href'),
                    'nav_text': this.textContent.trim()
                });
            }
        });
    });
}

// ===== PERFORMANCE MONITORING =====
function initPerformanceMonitoring() {
    // Track page load performance
    window.addEventListener('load', () => {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            
            gtmPush({
                'event': 'page_performance',
                'load_time': loadTime,
                'dom_ready_time': timing.domContentLoadedEventEnd - timing.navigationStart,
                'first_paint': timing.responseStart - timing.navigationStart
            });
        }
    });
    
    // Track user engagement
    let startTime = Date.now();
    let maxScroll = 0;
    
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        maxScroll = Math.max(maxScroll, scrollPercent);
    });
    
    window.addEventListener('beforeunload', () => {
        const sessionTime = Date.now() - startTime;
        
        gtmPush({
            'event': 'user_engagement',
            'session_time': sessionTime,
            'max_scroll_percent': maxScroll,
            'page_url': window.location.href
        });
    });
}

// ===== ERROR HANDLING =====
function initErrorHandling() {
    window.addEventListener('error', (event) => {
        gtmPush({
            'event': 'javascript_error',
            'error_message': event.message,
            'error_filename': event.filename,
            'error_line': event.lineno,
            'error_column': event.colno
        });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        gtmPush({
            'event': 'promise_rejection',
            'error_reason': event.reason?.toString() || 'Unknown promise rejection'
        });
    });
}

// ===== THEME HANDLING =====
function initThemeHandling() {
    // Detect system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        gtmPush({
            'event': 'theme_change',
            'theme': isDark ? 'dark' : 'light',
            'method': 'system'
        });
    }
    
    // Initial theme setup
    updateTheme(prefersDark.matches);
    
    // Listen for theme changes
    prefersDark.addEventListener('change', (e) => {
        updateTheme(e.matches);
    });
}

// ===== ANIMATION ENHANCEMENTS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                gtmPush({
                    'event': 'element_viewed',
                    'element_id': entry.target.id || 'unknown',
                    'element_class': entry.target.className || 'unknown'
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.stat, .feature, .footer-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initAccessibility() {
    // Add keyboard navigation for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
    
    // Add focus indicators
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Awesome x402 Page - Initializing...');
    
    // Track page view
    gtmPush({
        'event': 'page_view',
        'page_title': document.title,
        'page_url': window.location.href,
        'user_agent': navigator.userAgent,
        'timestamp': Date.now()
    });
    
    // Initialize all features
    try {
        initButtonHandlers();
        initSmoothScrolling();
        initScrollEffects();
        initPerformanceMonitoring();
        initErrorHandling();
        initThemeHandling();
        initAnimations();
        initAccessibility();
        
        // Load README content
        fetchAndRenderReadme();
        
        console.log('✅ All features initialized successfully');
        
        gtmPush({
            'event': 'app_initialized',
            'initialization_time': Date.now(),
            'features_loaded': [
                'button_handlers',
                'smooth_scrolling',
                'scroll_effects',
                'performance_monitoring',
                'error_handling',
                'theme_handling',
                'animations',
                'accessibility'
            ]
        });
        
    } catch (error) {
        console.error('❌ Error during initialization:', error);
        
        gtmPush({
            'event': 'initialization_error',
            'error_message': error.message,
            'error_stack': error.stack
        });
    }
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
                gtmPush({
                    'event': 'service_worker_registered',
                    'sw_scope': registration.scope
                });
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
                gtmPush({
                    'event': 'service_worker_error',
                    'error': registrationError.message
                });
            });
    });
}