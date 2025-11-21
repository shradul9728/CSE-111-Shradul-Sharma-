// Portfolio JavaScript - Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeApp();
});

function initializeApp() {
    // Loading screen
    handleLoadingScreen();
    
    // Navigation
    initializeNavigation();
    
    // Smooth scrolling
    initializeSmoothScrolling();
    
    // Intersection Observer for animations
    initializeScrollAnimations();
    
    // Project modal functionality
    initializeProjectModal();
    
    // Back to top button
    initializeBackToTop();
    
    // Contact form
    initializeContactForm();
    
    // Dynamic content loading
    initializeDynamicContent();
    
    // Performance monitoring
    monitorPerformance();
}

// Loading Screen Handler
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time (you can replace this with actual loading logic)
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.remove();
            // Initialize fancy effects after loading is complete
            initializeFancyEffects();
        }, 500);
    }, 1500);
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', debounce(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    // Handle internal navigation links only
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Global smooth scroll function
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate child elements with stagger effect
                const animateElements = entry.target.querySelectorAll('.animate-child');
                animateElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.individual-section, .contact-section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Observe individual elements
    document.querySelectorAll('.project-card, .skill-tag, .contact-item').forEach(el => {
        el.classList.add('animate-child');
    });
}

// Project modal functionality
function initializeProjectModal() {
    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeModal = document.querySelector('.close-modal');
    
    // Project data (you can expand this or load from an external source)
    const projectData = {
        1: {
            title: "C++ Learning Projects",
            description: "Hi, I'm Shradul Sharma, a tech enthusiast from Ambala, Haryana. I completed my schooling, including Class 12th, from M.D.A.V. Public School, Ambala, where I built a strong foundation in academics and developed a passion for technology and problem-solving. I've learned C and C++ from HIIT Ambala and actively work on improving my skills by building projects, exploring new tools, and understanding real-world applications of tech. I enjoy exploring new technologies & gadgets, contributing to open-source repositories, learning about app development & cybersecurity, gaming and drone technology, and watching tech content, documentaries, and tutorials.",
            tech: ["C++", "C Programming", "Algorithms", "Data Structures", "Problem Solving"],
            liveDemo: "#",
            github: "#"
        },
        2: {
            title: "Cybersecurity Learning",
            description: "Exploring cybersecurity concepts and ethical hacking through hands-on practice and research. I'm constantly working toward becoming a better developer every day, eager to learn, build, and solve challenging problems. My goal is to create impactful applications and contribute to meaningful projects while continuously growing in the tech world. This journey includes understanding security vulnerabilities, learning ethical hacking techniques, and exploring various cybersecurity tools and methodologies.",
            tech: ["Cybersecurity", "Ethical Hacking", "Security Research", "Vulnerability Assessment", "Network Security"],
            liveDemo: "#",
            github: "#"
        },
        3: {
            title: "Open Source Contributions",
            description: "Contributing to open-source repositories and building projects to enhance development skills. I've always been curious about how things work, which naturally led me toward programming and software development. Beyond academics, I enjoy exploring new technologies, contributing to open-source projects, and learning about app development. This includes participating in community projects, submitting pull requests, and collaborating with other developers to build meaningful solutions.",
            tech: ["Git", "GitHub", "Open Source", "Collaboration", "Version Control", "Community Projects"],
            liveDemo: "#",
            github: "#"
        },
        4: {
            title: "Academic Excellence",
            description: "Hello, I'm Ritesh Raj, a motivated and curious learner with a strong academic foundation and a passion for continuous growth. I completed my schooling at Mount Litera Zee School, Muzaffarpur, where I developed discipline, communication skills, and an interest in exploring new ideas. I later pursued my 12th grade at Green Valley International School, which further strengthened my academic perspective and shaped my ability to work with focus and dedication. I aim to grow in both personal and professional aspects, taking up opportunities that challenge me and allow me to apply my learning in meaningful ways.",
            tech: ["Leadership", "Communication", "Discipline", "Academic Excellence", "Focus", "Dedication"],
            liveDemo: "#",
            github: "#"
        },
        5: {
            title: "Creative Photography",
            description: "Beyond academics, I am someone who enjoys learning new skills and engaging in activities that help me think creatively. My hobbies include reading books, sports, technology, photography, drawing, coding, and music. These interests help me stay balanced, inspired, and continuously curious. Photography allows me to capture moments and express my creative vision while exploring the world around me.",
            tech: ["Photography", "Creativity", "Visual Arts", "Composition", "Storytelling"],
            liveDemo: "#",
            github: "#"
        },
        6: {
            title: "Learning & Development",
            description: "Through consistent effort, adaptability, and a positive attitude, I strive to build a path where I can contribute effectively and keep evolving. I enjoy engaging in activities that help me think creatively, including technology exploration and coding. My diverse interests help me maintain a balanced perspective while continuously learning and growing in various areas.",
            tech: ["Coding", "Technology", "Self-Learning", "Adaptability", "Problem Solving"],
            liveDemo: "#",
            github: "#"
        },
        7: {
            title: "Academic Foundation",
            description: "Hello, I'm Harshwardhan, a motivated and curious learner with a strong academic foundation and a passion for continuous growth. I completed my schooling at DAV Bakhri, Muzaffarpur, where I developed discipline, communication skills, and an interest in exploring new ideas. My educational journey has shaped my ability to approach challenges with focus and determination while maintaining a positive outlook on learning.",
            tech: ["Discipline", "Communication", "Academic Excellence", "Focus", "Determination"],
            liveDemo: "#",
            github: "#"
        },
        8: {
            title: "Creative Arts",
            description: "Beyond academics, I am someone who enjoys learning new skills and engaging in activities that help me think creatively. My hobbies include reading books, sports, technology, photography, drawing, coding, and music. These creative pursuits help me stay balanced, inspired, and continuously curious while developing my artistic abilities and self-expression.",
            tech: ["Drawing", "Music", "Creative Expression", "Artistic Skills", "Self-Expression"],
            liveDemo: "#",
            github: "#"
        },
        9: {
            title: "Personal Growth",
            description: "I aim to grow in both personal and professional aspects, taking up opportunities that challenge me and allow me to apply my learning in meaningful ways. Through consistent effort, adaptability, and a positive attitude, I strive to build a path where I can contribute effectively and keep evolving. My journey focuses on continuous learning and self-improvement.",
            tech: ["Self-Improvement", "Learning", "Growth Mindset", "Adaptability", "Positive Attitude"],
            liveDemo: "#",
            github: "#"
        },
        10: {
            title: "Academic Excellence",
            description: "Hello! I'm Tanu Yadav, an enthusiastic and self-motivated individual with a strong commitment to continuous learning and personal growth. I completed my schooling from Scion International School, Varanasi, Uttar Pradesh, where I also completed my 12th standard. Throughout my academic journey, I have developed a disciplined mindset, strong communication skills, and a keen interest in exploring new ideas.",
            tech: ["Education", "Discipline", "Growth", "Communication", "Self-Motivation"],
            liveDemo: "#",
            github: "#"
        },
        11: {
            title: "Fitness & Wellness",
            description: "I am passionate about learning, especially in areas that help me enhance my creativity and problem-solving abilities. My hobbies include fitness and outdoor activities, which help me maintain physical and mental wellness. I enjoy taking on tasks that challenge me and allow me to grow both personally and professionally while maintaining a healthy lifestyle.",
            tech: ["Fitness", "Wellness", "Outdoor Activities", "Health", "Physical Training"],
            liveDemo: "#",
            github: "#"
        },
        12: {
            title: "Social & Creative Skills",
            description: "My strengths include a positive attitude and being a quick learner. I enjoy reading and exploring new topics, listening to music, drawing & creative activities, learning new skills, and spending time with friends and family. These activities help me build strong relationships while expressing my creativity through various artistic and social endeavors.",
            tech: ["Social Skills", "Creativity", "Art & Music", "Quick Learning", "Positive Attitude"],
            liveDemo: "#",
            github: "#"
        },
        13: {
            title: "Academic Journey at LPU",
            description: "Hi, I'm George Chacko, a first-year student at Lovely Professional University, currently exploring the foundations of technology, engineering, and modern digital systems. I'm passionate about understanding how things work beneath the surface — from software design to user experience — and I'm actively building the skills that will shape my journey as a developer.",
            tech: ["Engineering", "Technology", "Digital Systems", "Software Design", "Learning"],
            liveDemo: "#",
            github: "#"
        },
        14: {
            title: "Personal Website Development",
            description: "I created this website as a space to document my growth, share my projects, and express my interest in the tech world. Whether it's experimenting with new tools, working on small applications, or learning from hands-on challenges, I'm constantly aiming to improve and push myself further. This platform represents my commitment to continuous learning and self-improvement.",
            tech: ["Web Development", "Portfolio", "Documentation", "HTML", "CSS", "JavaScript"],
            liveDemo: "#",
            github: "#"
        },
        15: {
            title: "Future Development Goals",
            description: "As I continue my academic journey, I'm excited to develop my technical abilities, collaborate with like-minded people, and contribute to meaningful ideas and projects. This is just the beginning, and I'm eager to see where it leads. My goals include mastering new programming languages, building innovative applications, and making a positive impact in the tech community.",
            tech: ["Skill Building", "Collaboration", "Innovation", "Programming", "Project Development"],
            liveDemo: "#",
            github: "#"
        }
    };
    
    // Open modal when clicking on project cards
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                showProjectModal(project);
            }
        });
    });
    
    // Close modal functionality
    closeModal?.addEventListener('click', hideProjectModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            hideProjectModal();
        }
    });
    
    function showProjectModal(project) {
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-description');
        const modalTech = modal.querySelector('.modal-tech');
        const modalLinks = modal.querySelector('.modal-links');
        
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        // Clear and populate tech tags
        modalTech.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            modalTech.appendChild(span);
        });
        
        // Update links
        const liveLink = modalLinks.querySelector('.modal-link:first-child');
        const githubLink = modalLinks.querySelector('.modal-link:last-child');
        
        liveLink.href = project.liveDemo;
        githubLink.href = project.github;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function hideProjectModal() {
        modal?.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Back to top button functionality
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }
    });
    
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(formData);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', Object.fromEntries(formData));
            resolve();
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10001',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Dynamic content loading with lazy loading
function initializeDynamicContent() {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const src = element.getAttribute('data-lazy');
                
                if (element.tagName === 'IMG') {
                    element.src = src;
                } else {
                    element.style.backgroundImage = `url(${src})`;
                }
                
                element.removeAttribute('data-lazy');
                lazyObserver.unobserve(element);
            }
        });
    });
    
    lazyElements.forEach(el => lazyObserver.observe(el));
}

// Performance monitoring
function monitorPerformance() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        console.log(`Page load time: ${loadTime}ms`);
        
        // You can send this data to analytics
        if (loadTime > 3000) {
            console.warn('Page load time is slow. Consider optimization.');
        }
    });
    
    // Monitor animations performance
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        }
    });
    
    observer.observe({ entryTypes: ['measure'] });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// CSS Animation classes for scroll animations
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate-child {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-child.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Hover effects for better interactivity */
    .project-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-tag {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-tag:hover {
        transform: translateY(-2px) scale(1.05);
    }
    
    .social-links a {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Loading animations */
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    .loading {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    /* Smooth reveal animations */
    @keyframes slideInFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .slide-in-bottom {
        animation: slideInFromBottom 0.8s ease-out;
    }
    
    .slide-in-left {
        animation: slideInFromLeft 0.8s ease-out;
    }
    
    .slide-in-right {
        animation: slideInFromRight 0.8s ease-out;
    }
`;
document.head.appendChild(style);

// Enhanced scroll tracking for analytics
function trackScrollDepth() {
    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set();
    
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.has(depth)) {
                trackedDepths.add(depth);
                console.log(`Scroll depth: ${depth}%`);
                // Send to analytics
            }
        });
    }, 1000));
}

// Initialize scroll tracking
trackScrollDepth();

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation styles
const keyboardNavStyle = document.createElement('style');
keyboardNavStyle.textContent = `
    body:not(.keyboard-navigation) *:focus {
        outline: none;
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardNavStyle);

// Initialize page when everything is loaded
window.addEventListener('load', () => {
    // Add any additional initialization here
    console.log('Portfolio loaded successfully!');
});

// ===== FANCY EFFECTS FUNCTIONS =====

function initializeFancyEffects() {
    createParticles();
    initScrollIndicator();
    initSectionReveal();
    initCursorTrail();
    initTypingAnimation();
    enhanceInteractions();
}

// Create animated background particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Section reveal on scroll
function initSectionReveal() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('section-reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Cursor trail effect
function initCursorTrail() {
    const trails = [];
    const trailCount = 5;

    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let trailIndex = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        const trail = trails[trailIndex];
        trail.style.left = mouseX + 'px';
        trail.style.top = mouseY + 'px';
        trail.style.opacity = '0.6';

        setTimeout(() => {
            trail.style.opacity = '0';
        }, 200);

        trailIndex = (trailIndex + 1) % trailCount;
    });
}

// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 2000);
}

// Enhanced interactions
function enhanceInteractions() {
    // Enhanced skill tag interactions
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-5px) scale(1.05)';
            tag.style.boxShadow = '0 10px 20px rgba(99, 102, 241, 0.2)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
            tag.style.boxShadow = 'none';
        });
    });

    // Enhanced project card interactions
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotateY(5deg) rotateX(5deg) translateZ(20px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)';
        });
    });

    // Enhanced social links with ripple effect
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .social-links a {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Export functions for global use
window.scrollToSection = scrollToSection;