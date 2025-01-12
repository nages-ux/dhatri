// Show scroll-to-top button when user scrolls down
window.onscroll = function() { toggleScrollToTopBtn() };

function toggleScrollToTopBtn() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Function to scroll slowly to the top
function scrollToTop(duration) {
    const start = window.scrollY;
    const startTime = performance.now();

    function step(timestamp) {
        const progress = (timestamp - startTime) / duration;
        if (progress < 1) {
            window.scrollTo(0, start - (start * progress));
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, 0); // Ensure we reach the top
        }
    }

    requestAnimationFrame(step);
}

// Scroll to top functionality with slow smooth scroll
document.querySelector('.scroll-to-top-btn').addEventListener('click', function () {
    scrollToTop(1000); // Duration is in milliseconds, adjust to make it slower or faster
});

// Add hover effect for brochure cards
document.querySelectorAll('.brochure-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const intervalTime = 5000; // 5 seconds for each slide

    function showSlide() {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    setInterval(nextSlide, intervalTime);
    showSlide();
});