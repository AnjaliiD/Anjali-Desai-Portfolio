// Page transition on load
window.addEventListener('load', () => {
    const pageTransition = document.getElementById('pageTransition');
    setTimeout(() => {
        pageTransition.classList.add('hidden');
        setTimeout(() => {
            pageTransition.style.display = 'none';
        }, 500);
    }, 800);
});

// Typing effect for name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    const typingCursor = document.createElement('span');
    typingCursor.innerHTML = '|';
    typingCursor.className = 'typing-cursor';
    
    function type() {
        if (i < text.length) {
            element.innerHTML = text.slice(0, i + 1);
            element.appendChild(typingCursor);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => typingCursor.remove(), 2000);
        }
    }
    type();
}

// Rolling counter animation like an odometer
function animateRollingCounter(rollerId, targetValue, delay = 0) {
    setTimeout(() => {
        const roller = document.getElementById(rollerId);
        if (!roller) return;
        
        // Calculate how many digits to show (target + extra for rolling effect)
        const rollDistance = targetValue + 10; // Roll through extra numbers
        const digitHeight = 1.2; // Height of each digit in em
        const finalPosition = -targetValue * digitHeight;
        
        // Apply the transform to roll to the target
        roller.style.transform = `translateY(${finalPosition}em)`;
    }, delay);
}


// Smooth scrolling for navigation with offset for section dividers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Find the section divider before the target section
            let scrollTarget = target;
            const previousElement = target.previousElementSibling;
            
            // If there's a section-divider before the target, scroll to that instead
            if (previousElement && previousElement.classList.contains('section-divider')) {
                scrollTarget = previousElement;
            }
            
            scrollTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(el);
});

document.querySelectorAll('.project-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = `all 0.8s ease ${index * 0.15}s`;
    observer.observe(el);
});

document.querySelectorAll('.activity-list-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50px)';
    el.style.transition = `all 0.8s ease ${index * 0.1}s`;
    observer.observe(el);
});

document.querySelectorAll('.certification-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.8)';
    el.style.transition = `all 0.8s ease ${index * 0.15}s`;
    observer.observe(el);
});

// Apply scroll animations
document.querySelectorAll('.timeline-item, .project-card, .activity-list-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Tech stack item interactions
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-2px) scale(1)';
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-20px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact cards hover effects
document.querySelectorAll('.contact-card, .social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Particle animation enhancement
/*    function createRandomParticles() {
    const hero = document.querySelector('.hero');
    setInterval(() => {
        if (document.querySelectorAll('.dynamic-particle').length < 15) {
            const particle = document.createElement('div');
            particle.className = 'particle dynamic-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            hero.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 8000);
        }
    }, 2000);
}  
*/

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Initialize everything when page loads
window.addEventListener('load', () => {
    // Start typing effect for name
    setTimeout(() => {
        const nameElement = document.getElementById('hero-name');
        if (nameElement) {
            typeWriter(nameElement, 'Anjali Desai', 120);
        }
    }, 1000);

// Start rolling counter animations
setTimeout(() => {
    animateRollingCounter('grade-tens-roll', 1, 1500); // Show "1" for grade 11
    animateRollingCounter('grade-ones-roll', 1, 1700); // Show "1" for grade 11
    animateRollingCounter('age-tens-roll', 1, 1800);   // Show "1" for age 16
    animateRollingCounter('age-ones-roll', 6, 2000);   // Show "6" for age 16
}, 0);

    // Start particle generation
  //  createRandomParticles();

    // Add loading animations
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Dropdown click to keep open
const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdown-btn');

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Animate timeline line on scroll
const timeline = document.querySelector('.timeline');
if (timeline) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.classList.add('animated');
            }
        });
    }, { threshold: 0.2 });
    
    timelineObserver.observe(timeline);
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple mailto fallback
        window.location.href = `mailto:anjali.desai0111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;                
        // Clear form
        contactForm.reset();
    });
}

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLeft = document.querySelector('.nav-left');

if (hamburger && navLeft) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLeft.classList.toggle('active');
    });
}

// Activity cards click to expand
document.querySelectorAll('.activity-list-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// View More Certificates functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
        const hiddenCerts = document.querySelectorAll('.certification-card.hidden');
        
        if (hiddenCerts.length > 0) {
            // Remove hidden class immediately
            hiddenCerts.forEach(cert => {
                cert.classList.remove('hidden');
                cert.style.animation = 'fadeInScale 0.5s ease forwards';
            });
            this.textContent = 'View Less ▲';
        } else {
            const allCerts = document.querySelectorAll('.certification-card');
            allCerts.forEach((cert, index) => {
                if (index >= 6) {
                    cert.classList.add('hidden');
                }
            });
            this.textContent = 'View More ▼';

            // Scroll back to certifications section
            document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Intersection Observer for About Section
const aboutObserverOptions = {
    threshold: 0.2, // Trigger when 20% of element is visible
    rootMargin: '0px 0px -50px 0px'
};

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class to trigger animations
            entry.target.classList.add('visible');
            
            // If it's the about-right section, animate tech items with stagger
            if (entry.target.classList.contains('about-right')) {
                const techItems = entry.target.querySelectorAll('.tech-item');
                techItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 1300 + (index * 50)); // Stagger by 50ms each
                });
            }
            
            // Stop observing once animated (optional - remove if you want to re-animate on scroll up)
            aboutObserver.unobserve(entry.target);
        }
    });
}, aboutObserverOptions);

// Observe about section elements
document.addEventListener('DOMContentLoaded', () => {
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    
    if (aboutLeft) {
        aboutObserver.observe(aboutLeft);
    }
    
    if (aboutRight) {
        aboutObserver.observe(aboutRight);
    }
});
