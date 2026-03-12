// Vesper Transport Website

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const faqQuestions = document.querySelectorAll('.faq-question');

const toggleMenu = () => {
    menuToggle?.classList.toggle('active');
    navMenu?.classList.toggle('active');
};

const closeMenu = () => {
    menuToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
};

// Menu events
menuToggle?.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container')) closeMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (href !== '#' && target) {
            e.preventDefault();
            const offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});

// Update nav link active state on scroll
const updateActiveNav = () => {
    let active = '';
    document.querySelectorAll('section').forEach(section => {
        const top = section.offsetTop;
        if (window.scrollY + 100 >= top && window.scrollY + 100 < top + section.clientHeight) {
            active = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === active);
    });
};

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// FAQ accordion
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        
        if (!isActive) {
            answer.classList.add('active');
            this.classList.add('active');
        }
    });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 12px rgba(26, 35, 50, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(26, 35, 50, 0.08)';
    }
});

