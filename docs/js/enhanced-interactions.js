/**
 * Enhanced Interactions for Паскалеви Website
 * Adds professional animations, scroll effects, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll progress indicator
    initScrollProgress();
    
    // Initialize intersection observers for animations
    initIntersectionObservers();
    
    // Initialize enhanced cards
    initEnhancedCards();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize hero parallax effect
    initHeroParallax();
    
    // Initialize enhanced navigation
    initEnhancedNavigation();
    
    // Initialize form validations
    initFormValidation();
    
    // Auto-hide header on scroll down, show on scroll up
    initSmartHeader();
    
    // Add mobile menu functionality
    initMobileMenu();
    
    // Ensure enhanced buttons maintain text visibility
    fixEnhancedButtons();
});

/**
 * Initialize scroll progress indicator
 */
function initScrollProgress() {
    // Create progress bar if it doesn't exist
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.transform = 'scaleX(0)';
        document.body.appendChild(progressBar);
    }
    
    // Update progress bar width on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        
        document.querySelector('.scroll-progress').style.transform = `scaleX(${scrollPercent})`;
    });
}

/**
 * Initialize intersection observers for animations
 */
function initIntersectionObservers() {
    // Options for the observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Callback function when elements intersect
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Only trigger once
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(elem => {
        observer.observe(elem);
    });
}

/**
 * Initialize enhanced cards with hover effects
 */
function initEnhancedCards() {
    // Add enhanced-card class to service and equipment cards
    document.querySelectorAll('.service-card, .equipment-card, .gallery-item').forEach(card => {
        card.classList.add('enhanced-card');
    });
    
    // Add 3D tilt effect on mouse move
    document.querySelectorAll('.enhanced-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            // Calculate the percentage of the position in the element
            const xPercent = (x / rect.width - 0.5) * 10; // -5 to 5 degrees
            const yPercent = (y / rect.height - 0.5) * 10 * -1; // -5 to 5 degrees, inverted
            
            this.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // Add special animation for service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.08)';
            this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07), 0 0 30px rgba(102, 255, 0, 0.2)';
            this.style.zIndex = '20';
            
            // Highlight the icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-color)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.zIndex = '';
            
            // Reset the icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navList = document.querySelector('.nav-list');
                const navToggle = document.querySelector('.nav-toggle');
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    navToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize parallax effect for hero section
 */
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const parallaxSpeed = 0.5;
            
            // Parallax effect: background moves slower than scroll
            hero.style.backgroundPositionY = `calc(50% + ${scrollPosition * parallaxSpeed}px)`;
            
            // Fade content on scroll
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = 1 - (scrollPosition * 0.002);
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        });
    }
}

/**
 * Initialize enhanced navigation
 */
function initEnhancedNavigation() {
    const nav = document.querySelector('.main-nav');
    if (nav) {
        nav.classList.add('nav-enhanced');
        
        // Update active nav item based on scroll position
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollY = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

/**
 * Initialize enhanced form validation
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add enhanced styles to form controls
        form.querySelectorAll('.form-control').forEach(input => {
            input.classList.add('form-control-enhanced');
        });
        
        // Add validation on form submission
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate required fields
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    highlightError(field);
                } else {
                    removeError(field);
                }
            });
            
            // Validate email fields
            form.querySelectorAll('input[type="email"]').forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value.trim() && !emailRegex.test(field.value)) {
                    isValid = false;
                    highlightError(field);
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Show form error message
                showFormError(form);
            } else {
                // Show success message
                showFormSuccess(form);
                e.preventDefault(); // Prevent actual submission for demo
            }
        });
        
        // Add real-time validation on blur
        form.querySelectorAll('.form-control').forEach(field => {
            field.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    highlightError(this);
                } else if (this.type === 'email' && this.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        highlightError(this);
                    } else {
                        removeError(this);
                    }
                } else {
                    removeError(this);
                }
            });
        });
    });
    
    function highlightError(field) {
        field.classList.add('error');
        field.style.borderColor = 'var(--error)';
        field.style.boxShadow = '0 0 0 3px rgba(255, 59, 48, 0.1)';
        
        // Add error message if not exists
        let errorMsg = field.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.style.color = 'var(--error)';
            errorMsg.style.fontSize = '0.8rem';
            errorMsg.style.marginTop = '5px';
            
            if (field.type === 'email') {
                errorMsg.textContent = 'Моля, въведете валиден имейл адрес.';
            } else {
                errorMsg.textContent = 'Това поле е задължително.';
            }
            
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
            
            // Animate error message
            errorMsg.style.opacity = '0';
            errorMsg.style.transform = 'translateY(-10px)';
            errorMsg.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                errorMsg.style.opacity = '1';
                errorMsg.style.transform = 'translateY(0)';
            }, 10);
        }
    }
    
    function removeError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        field.style.boxShadow = '';
        
        // Remove error message if exists
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.opacity = '0';
            errorMsg.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                errorMsg.remove();
            }, 300);
        }
    }
    
    function showFormError(form) {
        // Show form error toast
        showToast('Моля, проверете формата за грешки.', 'error');
    }
    
    function showFormSuccess(form) {
        // Clear form
        form.reset();
        
        // Show success toast
        showToast('Вашето съобщение беше изпратено успешно!', 'success');
    }
}

/**
 * Initialize smart header behavior
 */
function initSmartHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 10) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > headerHeight && scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close menu when clicking on a link
        navList.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '1000';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    // Style toast
    toast.style.background = type === 'error' ? 'var(--error)' : 'var(--success)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = 'var(--border-radius-md)';
    toast.style.marginTop = '10px';
    toast.style.boxShadow = 'var(--shadow-md)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

/**
 * Fix enhanced buttons to ensure text visibility on hover
 */
function fixEnhancedButtons() {
    // Find all enhanced buttons
    const enhancedButtons = document.querySelectorAll('.btn-enhanced');
    
    // Add specific event listeners to fix any transform issues
    enhancedButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Ensure z-index is always set
            this.style.zIndex = '10';
            
            // Ensure text color is explicitly maintained
            if (this.classList.contains('btn-primary')) {
                this.style.color = 'var(--text-color)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            // Reset z-index
            this.style.zIndex = '';
            
            // Keep text color visible during transition
            if (this.classList.contains('btn-primary')) {
                this.style.color = 'var(--text-color)';
                
                // Delay reset of color to ensure visibility throughout transition
                setTimeout(() => {
                    this.style.color = '';
                }, 300);
            }
        });
    });
} 