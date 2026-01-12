// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 Music website loaded!");
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Genre cards click effect
    document.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.textContent;
            alert(`You selected: ${genre}! This would filter/show ${genre} tracks.`);
            // In future, you can add filtering functionality here
        });
    });
    // ===== GENRE TABS FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const genre = button.getAttribute('data-genre');
            const tabToShow = document.getElementById(`${genre}-tab`);
            if (tabToShow) {
                tabToShow.classList.add('active');
            }
        });
    });
    
    // Auto-add "Light it up!" to appropriate playlist (example logic)
    console.log("Genre tabs system ready! Create SoundCloud playlists and add embed codes.");
});
    
    // Form submission (for demo)
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thanks for your message! This is a demo. In a real site, this would email you.");
            // Clear form
            this.reset();
        });
    }
    
    // Change background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if(window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(15, 15, 26, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(15, 15, 26, 0.95)';
        }
    });
    
    // Audio player enhancement
    const audioPlayer = document.querySelector('audio');
    if(audioPlayer) {
        // You can add custom player controls here later
        console.log("Audio player ready!");
    }

});
