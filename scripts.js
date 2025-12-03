// Basic interactivity: Add smooth scroll and hover enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any internal links (if added)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Enhanced hover effect on iPhone images (already in CSS, but JS can add animation class)
    const iphoneItems = document.querySelectorAll('.iphone-item');
    iphoneItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Optional: Add a loading animation for images
    const images = document.querySelectorAll('.iphone-img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll Helper (untuk navigasi di index.html)
    window.scrollToSection = function(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // Scroll Animation Observer (Digunakan di kedua halaman: index.html & about.html)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // FAQ Accordion Logic (Hanya untuk index.html)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (question && answer) { // Pastikan elemen ada (hanya di index.html)
          question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
    
            // Close others when opening one
            faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
              }
            });
    
            if (isActive) {
              item.classList.remove('active');
              answer.style.maxHeight = null;
            } else {
              item.classList.add('active');
              // Set max-height to the scrollHeight value for smooth transition
              answer.style.maxHeight = answer.scrollHeight + "px";
            }
          });
      }
    });
});