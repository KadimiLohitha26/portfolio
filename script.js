document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navbar.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when clicking on overlay or link
    menuOverlay.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navbar.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navbar.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
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
    
    // Certificate Modal
    const modal = document.getElementById('certificateModal');
    const modalIframe = document.getElementById('modalCertificateIframe');
    const closeModal = document.querySelector('.close-modal');
    
    const certificates = {
        'fullstack': {
            view: 'https://drive.google.com/file/d/1Fz-tJSknW2k8F7z9qW3lctKOfdjAZT5w/preview',
        },
        'verilog': {
            view: 'https://drive.google.com/file/d/1DzyQa34mfPZofFNVrJDA9FzAEUBzYRke/preview',
        },
        'ccna': {
            view: 'https://drive.google.com/file/d/1UQQZ5gexfolKR8CtClAvO01YsJsJ0WXQ/preview',
        },
        'vlsi': {
            view: 'https://drive.google.com/file/d/1lhN_ZP4-iKyIUpRESJL3XqGqn-akEMnS/preview',
        },
        'embedded': {
            view: 'https://drive.google.com/file/d/1d7q90bTPAir07af9BSbMwWu7At0566kt/preview',
        }
    };
    
    document.querySelectorAll('.btn-certificate').forEach(button => {
        button.addEventListener('click', function() {
            const certId = this.getAttribute('data-certificate');
            const certData = certificates[certId];
            
            if (certData) {
                modalIframe.src = certData.view;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when clicking X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalIframe.src = '';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside iframe
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Scroll Reveal Animation
    ScrollReveal().reveal('.heading', { 
        origin: 'top', 
        distance: '80px',
        duration: 1000,
        delay: 200
    });
    
    ScrollReveal().reveal('.home-content, .about-content, .skill-category, .project-card, .certification-card, .contact-info', { 
        origin: 'bottom',
        distance: '80px',
        duration: 1000,
        delay: 200
    });
});
