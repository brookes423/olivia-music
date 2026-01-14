// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 Olivia Brooke Music website loaded!");
    
    // ===== SMOOTH SCROLLING =====
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
    
    // ===== GENRE CARDS CLICK =====
    document.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.textContent.trim();
            
            // Map genre cards to tabs - UPDATED WITH ALL 8 GENRES
            const genreMap = {
                'EDM': 'edm',
                'Techno': 'techno',
                'Synth Wave': 'synthwave',
                'Synth Pop': 'synthpop',
                'Gospel': 'gospel',
                'Christmas': 'gospel',
                'Trance': 'trance',
                'Trap': 'trap',
                'Hardstyle': 'edm',
                'Lo-fi': 'lofi',          // UPDATED: Now maps to lofi tab (has playlist)
                'Chillwave': 'lofi',
                'Meditation': 'lofi'
            };
            
            if (genreMap[genre]) {
                // Switch to corresponding tab
                const tabBtn = document.querySelector(`.tab-btn[data-genre="${genreMap[genre]}"]`);
                if (tabBtn) {
                    // Trigger tab click
                    tabBtn.click();
                    // Scroll to music section
                    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                alert(`🎵 ${genre} selected! Check out my ${genre} tracks in the player below.`);
            }
        });
    });
    
    // ===== GENRE TABS FUNCTIONALITY =====
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
            
            console.log(`Switched to ${genre} tab`);
        });
    });
    
    // ===== FORM SUBMISSION =====
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thanks for your message! I'll contact you soon.");
            this.reset();
        });
    }
    
    // ===== NAV BACKGROUND ON SCROLL =====
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if(window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(15, 15, 26, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(15, 15, 26, 0.95)';
        }
    });
    
    // ===== AUTO-SCROLL TO MUSIC ON LOAD =====
    if (window.location.hash === '#work') {
        setTimeout(() => {
            document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
    
    // ===== INITIAL LOGS =====
    console.log("Genre tabs system ready!");
    console.log("8 SoundCloud playlists integrated!");
    console.log("Website fully functional with all genres!");
    console.log("Genres available: EDM, Techno, Synth Wave, Synth Pop, Trap, Trance, Lo-fi, Gospel");
    console.log("Featured tracks: Light it up!, Voltage Rage, Neon Horizon, After Light, Own the Vibe, Into the Light, Midnight Coffee, Called by Grace");
});
