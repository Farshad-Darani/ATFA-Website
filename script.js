// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== SCROLL ANIMATIONS (AOS-like implementation) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ===== SCREENSHOT SLIDER (Simple Auto-scroll) =====
const screenshotsSlider = document.querySelector('.screenshots-slider');
let isDown = false;
let startX;
let scrollLeft;

if (screenshotsSlider) {
    screenshotsSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsSlider.style.cursor = 'grabbing';
        startX = e.pageX - screenshotsSlider.offsetLeft;
        scrollLeft = screenshotsSlider.scrollLeft;
    });

    screenshotsSlider.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsSlider.style.cursor = 'grab';
    });

    screenshotsSlider.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsSlider.style.cursor = 'grab';
    });

    screenshotsSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsSlider.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsSlider.scrollLeft = scrollLeft - walk;
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Animate counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetText = statNumber.textContent;
            
            // Only animate if it's a number
            if (!isNaN(targetText)) {
                entry.target.classList.add('counted');
                animateCounter(statNumber, parseInt(targetText));
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(stat => {
    statObserver.observe(stat);
});

// ===== FORM VALIDATION (if needed in future) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== LAZY LOADING IMAGES =====
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled <= window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== FEATURE CARDS TILT EFFECT =====
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== DYNAMIC YEAR IN FOOTER =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

// ===== DOWNLOAD BUTTON TRACKING =====
document.querySelectorAll('.btn-download, .btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add analytics tracking here if needed
        console.log('Download/CTA button clicked:', e.target.textContent.trim());
    });
});

// ===== COPY TO CLIPBOARD (for future use) =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===== DEVICE DETECTION =====
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.body.classList.add('mobile-device');
} else {
    document.body.classList.add('desktop-device');
}

// ===== PREVENT CONTEXT MENU ON IMAGES (Optional) =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment to disable right-click on images
        // e.preventDefault();
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚗 ATFA - Intelligent Automobile Diagnostic System', 'font-size: 16px; font-weight: bold; color: #2196F3;');
console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #94A3B8;');
console.log('%cInterested in working with us? Contact: f.darani85@gmail.com', 'font-size: 12px; color: #64748B;');

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}
