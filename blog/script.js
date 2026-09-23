// ===== Sticky TOC shadow on scroll =====
const toc = document.getElementById('toc');
window.addEventListener('scroll', () => {
    toc.classList.toggle('scrolled', window.scrollY > 100);
});

// ===== Scroll-to-top button =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Active TOC link based on scroll position =====
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('.toc-links a');

function updateActiveLink() {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===== Intersection Observer for card animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Handle broken images gracefully =====
document.querySelectorAll('.img-placeholder img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
    });
});
