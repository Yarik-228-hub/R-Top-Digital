

// Mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const burger = document.querySelector('.mobile-menu-toggle');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const burger = document.querySelector('.mobile-menu-toggle');
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.getElementById('navLinks').classList.remove('active');
            document.querySelector('.mobile-menu-toggle').classList.remove('active');
        }
    });
});

// Modal
function openModal() {
    const modal = document.getElementById('modalOverlay');
    const body = document.body;
    
    modal.classList.add('active');
    body.classList.add('modal-open');
    
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 100);
    
    document.getElementById('navLinks').classList.remove('active');
    document.querySelector('.mobile-menu-toggle').classList.remove('active');
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    const body = document.body;
    
    modal.classList.remove('active');
    body.classList.remove('modal-open');
    
    const status = document.getElementById('formStatus');
    status.style.display = 'none';
}

function closeModalOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const status = document.getElementById('formStatus');
    const button = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    
    button.textContent = 'Отправка...';
    button.disabled = true;
    
    setTimeout(() => {
        console.log('Form data:', Object.fromEntries(formData));
        
        status.textContent = '✅ Спасибо за заявку! Мы свяжемся с вами в течение 24 часов.';
        status.className = 'form-status success';
        status.style.display = 'block';
        
        form.reset();
        
        button.textContent = 'Отправить заявку';
        button.disabled = false;
        
        setTimeout(() => {
            closeModal();
            status.style.display = 'none';
        }, 3000);
    }, 1500);
}

// FAQ toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Создание частиц фона
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайная позиция
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Запуск анимации частиц после загрузки
document.addEventListener('DOMContentLoaded', createParticles);

// Эффект клика
document.querySelector('.banner-container').addEventListener('click', function(e) {
    // Эффект вспышки
    this.style.backgroundColor = '#00d4ff';
    setTimeout(() => {
        this.style.backgroundColor = '';
    }, 150);
    
    // Усиление анимации при клике
    const logo = document.querySelector('.logo-r');
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'glowIn 0.8s ease-out 0.8s forwards, float 3s ease-in-out 2s infinite';
    }, 10);
    
    console.log('Переход на сайт R-Top (728x90)');
})
document.querySelector('.banner-small').addEventListener('click', function(e) {
    // Добавляем эффект клика
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Эффект вспышки при клике
    const flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'rgba(255, 255, 255, 0.3)';
    flash.style.zIndex = '4';
    flash.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    this.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
    
    console.log('Переход на сайт R-Top');
});

// Добавляем стиль для эффекта вспышки
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);