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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_vpnd4lc'; // Replace with your EmailJS service ID
    const templateID = 'template_0dzktu8'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert('Failed to send message. Please try again later.');
            console.error('Failed to send message:', err);
        });
});

// Modal functionality
const termsLink = document.getElementById('terms-link');
const privacyLink = document.getElementById('privacy-link');
const termsModal = document.getElementById('terms-modal');
const privacyModal = document.getElementById('privacy-modal');
const closeTerms = document.getElementById('close-terms');
const closePrivacy = document.getElementById('close-privacy');

termsLink.addEventListener('click', function() {
    termsModal.style.display = 'block';
});

privacyLink.addEventListener('click', function() {
    privacyModal.style.display = 'block';
});

closeTerms.addEventListener('click', function() {
    termsModal.style.display = 'none';
});

closePrivacy.addEventListener('click', function() {
    privacyModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == termsModal) {
        termsModal.style.display = 'none';
    }
    if (event.target == privacyModal) {
        privacyModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    var termsModal = document.getElementById('terms-modal');
    var privacyModal = document.getElementById('privacy-modal');

    // Get the link elements
    var termsLink = document.getElementById('terms-link');
    var privacyLink = document.getElementById('privacy-link');

    // Get the <span> elements that close the modals
    var closeTerms = document.getElementById('close-terms');
    var closePrivacy = document.getElementById('close-privacy');

    // When the user clicks the link, open the modal
    termsLink.onclick = function() {
        termsModal.classList.add('show');
        termsModal.style.display = 'block';
    }

    privacyLink.onclick = function() {
        privacyModal.classList.add('show');
        privacyModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    closeTerms.onclick = function() {
        termsModal.classList.remove('show');
        setTimeout(function() {
            termsModal.style.display = 'none';
        }, 300); // Match the transition duration
    }

    closePrivacy.onclick = function() {
        privacyModal.classList.remove('show');
        setTimeout(function() {
            privacyModal.style.display = 'none';
        }, 300); // Match the transition duration
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == termsModal) {
            termsModal.classList.remove('show');
            setTimeout(function() {
                termsModal.style.display = 'none';
            }, 300); // Match the transition duration
        }
        if (event.target == privacyModal) {
            privacyModal.classList.remove('show');
            setTimeout(function() {
                privacyModal.style.display = 'none';
            }, 300); // Match the transition duration
        }
    }
});
