document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const wifiBtn = document.getElementById('wifi-btn');
    const wifiModal = document.getElementById('wifi-modal');
    const feedbackBtn = document.getElementById('feedback-btn');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeButtons = document.querySelectorAll('.close');
    
    wifiBtn.addEventListener('click', () => {
        wifiModal.style.display = 'block';
    });

    feedbackBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            wifiModal.style.display = 'none';
            feedbackModal.style.display = 'none';
        });
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
        feedbackModal.style.display = 'none';
        feedbackForm.reset();
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === wifiModal || e.target === feedbackModal) {
            wifiModal.style.display = 'none';
            feedbackModal.style.display = 'none';
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
}); 