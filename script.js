// ============================================
// Smooth Scrolling & Navigation
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Active Navigation Link
    // ============================================
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navHeight = document.querySelector('.nav').offsetHeight;
            
            if (window.pageYOffset >= sectionTop - navHeight - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ============================================
    // Scroll Animation for Elements
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .insight-card, .artifact-card, .curiosity-category, .contact-card');
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add CSS class for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item,
        .project-card,
        .insight-card,
        .artifact-card,
        .curiosity-category,
        .contact-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.fade-in,
        .project-card.fade-in,
        .insight-card.fade-in,
        .artifact-card.fade-in,
        .curiosity-category.fade-in,
        .contact-card.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--accent-color);
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // Project Status Animation
    // ============================================
    
    const statusElements = document.querySelectorAll('.project-status');
    
    statusElements.forEach(status => {
        if (status.textContent.trim() === 'In Progress') {
            status.classList.add('in-progress');
        } else if (status.textContent.trim() === 'Complete') {
            status.classList.add('complete');
        }
    });
    
    // ============================================
    // Timeline Progress Bar
    // ============================================
    
    function updateTimelineProgress() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;
        
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.pageYOffset;
        
        const progress = Math.max(0, Math.min(1, 
            (scrollPosition + windowHeight - timelineTop) / timelineHeight
        ));
        
        timeline.style.setProperty('--timeline-progress', progress);
    }
    
    window.addEventListener('scroll', updateTimelineProgress);
    updateTimelineProgress();
    
    // ============================================
    // Intersection Observer for Stats/Counts
    // ============================================
    
    // This could be extended for counting animations if needed
    
    // ============================================
    // Email Obfuscation (Basic Security)
    // ============================================
    
    // Simple email protection (replace placeholder in HTML if needed)
    const emailLinks = document.querySelectorAll('a[href^="mailto:your.email"]');
    emailLinks.forEach(link => {
        // You can update this with actual email handling logic
        link.addEventListener('click', function(e) {
            // Add analytics or other tracking here if needed
        });
    });
    
    // ============================================
    // Mobile Menu Toggle (if implemented)
    // ============================================
    
    // Reserved for future mobile menu implementation
    
    // ============================================
    // Console Easter Egg for Curious Learners
    // ============================================
    
    console.log('%c👋 Hi there, curious learner!', 'color: #3a7ca5; font-size: 20px; font-weight: bold;');
    console.log('%cI see you\'re checking out the code. That\'s exactly the kind of curiosity that drives good learning!', 'color: #5a5a5a; font-size: 14px;');
    console.log('%cFeel free to explore, learn from what you find, and reach out if you want to discuss the code.', 'color: #5a5a5a; font-size: 14px;');
    console.log('%c- Ian', 'color: #3a7ca5; font-size: 14px; font-style: italic;');
    
    // ============================================
    // Performance: Lazy Load Images (if added later)
    // ============================================
    
    if ('IntersectionObserver' in window) {
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
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // Keyboard Navigation Enhancement
    // ============================================
    
    document.addEventListener('keydown', function(e) {
        // Allow keyboard navigation through sections
        if (e.key === 'ArrowDown' && e.ctrlKey) {
            e.preventDefault();
            scrollToNextSection();
        } else if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });
    
    function scrollToNextSection() {
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentScroll = window.pageYOffset;
        const navHeight = document.querySelector('.nav').offsetHeight;
        
        for (let section of sections) {
            if (section.offsetTop > currentScroll + navHeight + 50) {
                window.scrollTo({
                    top: section.offsetTop - navHeight,
                    behavior: 'smooth'
                });
                break;
            }
        }
    }
    
    function scrollToPreviousSection() {
        const sections = Array.from(document.querySelectorAll('.section')).reverse();
        const currentScroll = window.pageYOffset;
        const navHeight = document.querySelector('.nav').offsetHeight;
        
        for (let section of sections) {
            if (section.offsetTop < currentScroll - 50) {
                window.scrollTo({
                    top: section.offsetTop - navHeight,
                    behavior: 'smooth'
                });
                break;
            }
        }
    }
    
    // ============================================
    // Update Last Modified Date
    // ============================================
    
    const lastModified = new Date(document.lastModified);
    const footerMeta = document.querySelector('.footer-meta');
    
    if (footerMeta) {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = lastModified.toLocaleDateString('en-US', options);
        footerMeta.textContent = `Last updated: ${formattedDate} • This portfolio evolves as I learn`;
    }
    
    // ============================================
    // Analytics Event Tracking (Placeholder)
    // ============================================
    
    function trackEvent(category, action, label) {
        // Placeholder for analytics tracking
        // Can be integrated with Google Analytics or other tracking tools
        console.log(`Event tracked: ${category} - ${action} - ${label}`);
    }
    
    // Track project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            trackEvent('Projects', 'View', projectName);
        });
    });
    
    // Track contact method clicks
    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('click', function() {
            const contactMethod = this.closest('.contact-card').querySelector('h3').textContent;
            trackEvent('Contact', 'Click', contactMethod);
        });
    });
    
    // ============================================
    // Scroll to Top Button (Optional)
    // ============================================
    
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    // Add styles for scroll to top button
    const scrollBtnStyle = document.createElement('style');
    scrollBtnStyle.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--accent-color);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background-color: var(--accent-light);
            transform: translateY(-4px);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
        }
    `;
    document.head.appendChild(scrollBtnStyle);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // Initialization Complete
    // ============================================
    
    console.log('Portfolio initialized successfully! 🚀');
});
