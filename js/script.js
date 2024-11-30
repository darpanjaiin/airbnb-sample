document.addEventListener('DOMContentLoaded', function() {
    // Modal mapping
    const modalMapping = {
        'wifi-btn': 'wifi-modal',
        'howto-btn': 'howto-modal',
        'nearby-btn': 'nearby-modal',
        'emergency-btn': 'emergency-modal',
        'rules-btn': 'rules-modal',
        'specials-btn': 'specials-modal',
        'host-favorites': 'host-favorites-modal',
        'amenities-card': 'amenities-modal',
        'checkout-card': 'checkout-modal',
        'feedback-btn': 'feedback-modal'
    };

    // Add click handlers for all buttons
    Object.keys(modalMapping).forEach(btnId => {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalMapping[btnId]);
        if (btn && modal) {
            btn.addEventListener('click', () => {
                openModal(modalMapping[btnId]);
            });
        }
    });

    // Share functionality
    const shareBtn = document.getElementById('share-btn');
    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Joey's In - Digital Guidebook",
                    text: 'Check out this amazing property!',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
                alert('Unable to share at this time');
            }
        } else {
            alert('Share via: [Copy URL functionality to be implemented]');
        }
    });

    // Feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your feedback!');
        closeModal('feedback-modal');
        feedbackForm.reset();
    });

    // Close button functionality for all modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeModal(closeBtn.closest('.modal').id);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // When opening a modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";
        modal.classList.add('active');
    }

    // When closing a modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
        modal.classList.remove('active');
    }
}); 