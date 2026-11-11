
const themeToggle = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    if (body.getAttribute('data-theme') === 'dark') {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});


const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
       
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    

    console.log({ name, email, subject, message });
    

    const formElements = contactForm.elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
    
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Your message has been sent successfully!';
    successMessage.style.padding = '15px';
    successMessage.style.backgroundColor = '#4CAF50';
    successMessage.style.color = 'white';
    successMessage.style.borderRadius = '5px';
    successMessage.style.marginTop = '20px';
    successMessage.style.textAlign = 'center';
    
    contactForm.appendChild(successMessage);
    

    setTimeout(() => {
        contactForm.reset();
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = false;
        }
        contactForm.removeChild(successMessage);
    }, 3000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


const skillBars = document.querySelectorAll('.skill-level');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);


const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .certificate-card, .portfolio-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);