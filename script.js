document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navbar.classList.remove('active');
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Animate skills bars when scrolled to
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const skillPer = skill.querySelector('.skill-per');
            const percent = skill.getAttribute('data-percent');
            
            skillPer.style.width = percent + '%';
            skillPer.setAttribute('data-percent', percent + '%');
        });
    }
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    skillsObserver.observe(document.querySelector('.skills'));
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
    
    // Scroll Reveal Animation
    ScrollReveal().reveal('.heading', { 
        origin: 'top', 
        distance: '80px',
        duration: 1000,
        delay: 200
    });
    
    ScrollReveal().reveal('.home-content, .about-content, .skill-category, .project-card, .contact-form', { 
        origin: 'bottom',
        distance: '80px',
        duration: 1000,
        delay: 200
    });
});