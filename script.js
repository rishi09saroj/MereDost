document.addEventListener('DOMContentLoaded', function() {
    const passwordOverlay = document.getElementById('password-overlay');
    const submitPassword = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password-input');
    const mainContent = document.getElementById('main-content');
    
    // Show main content and hide password overlay
    submitPassword.addEventListener('click', function() {
        if (passwordInput.value.trim() !== '') {
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.classList.add('fade-in');
            }, 1000); // Match the opacity transition duration
        }
    });

    // Role animation
    const roles = ['Web Designer', 'Phonk Lover', 'Video Editor', 'Gym Freak'];
    let currentRoleIndex = 0;
    const roleText = document.getElementById('role-text');
    
    function updateRole() {
        roleText.innerHTML = `<span id="i-am">I am </span><span id="role">${roles[currentRoleIndex]}</span>`;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    updateRole(); // Initial call
    setInterval(updateRole, 2000); // Change role every 2 seconds

    // Scroll event to add glow to the visible friend box
    const friendBoxes = document.querySelectorAll('.friend-box');
    
    function checkVisibleBoxes() {
        const viewportHeight = window.innerHeight;
        
        friendBoxes.forEach(box => {
            const boxRect = box.getBoundingClientRect();
            if (boxRect.top >= 0 && boxRect.bottom <= viewportHeight) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibleBoxes);
    checkVisibleBoxes(); // Initial check

    // Responsive adjustments
    function adjustLayout() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            document.querySelectorAll('.intro, .friends').forEach(el => {
                el.style.padding = '10px';
            });
        } else {
            document.querySelectorAll('.intro, .friends').forEach(el => {
                el.style.padding = '50px';
            });
        }
    }

    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Initial adjustment
    document.addEventListener('DOMContentLoaded', () => {
        const passwordOverlay = document.getElementById('password-overlay');
        const mainContent = document.getElementById('main-content');
        const submitPassword = document.getElementById('submit-password');
        const backgroundMusic = document.getElementById('background-music');
        const friendBoxes = document.querySelectorAll('.friend-box');
    
        // Play background music
        backgroundMusic.play();
    
        // Submit password button event listener
        submitPassword.addEventListener('click', () => {
            const nameInput = document.getElementById('password-input').value.trim();
            if (nameInput) {
                passwordOverlay.style.display = 'none';
                mainContent.style.display = 'block';
            } else {
                alert('Please enter your name.');
            }
        });
    
        // Scroll event listener for glow effect
        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY + window.innerHeight;
            friendBoxes.forEach(box => {
                const boxTop = box.offsetTop;
                const boxBottom = boxTop + box.offsetHeight;
                if (scrollPosition > boxTop && scrollPosition < boxBottom) {
                    box.classList.add('active');
                } else {
                    box.classList.remove('active');
                }
            });
        });
    
        // Center the help box
        const helpBox = document.querySelector('.help-box');
        helpBox.style.left = 'auto';
        helpBox.style.right = '10px';
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Background music
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 1;
    
        // Role Cycle Animation
        const roles = ['Web Designer', 'Phonk Lover', 'Video Editor', 'Gym Freak'];
        let currentRoleIndex = 0;
        const roleText = document.getElementById('role-text');
    
        function updateRoleText() {
            let text = roles[currentRoleIndex];
            let displayedText = '';
            let i = 0;
    
            function type() {
                if (i < text.length) {
                    displayedText += text.charAt(i);
                    roleText.textContent = displayedText;
                    i++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(deleteText, 1000);
                }
            }
    
            function deleteText() {
                displayedText = displayedText.slice(0, -1);
                roleText.textContent = displayedText;
                if (displayedText.length === 0) {
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    setTimeout(updateRoleText, 500);
                } else {
                    setTimeout(deleteText, 50);
                }
            }
    
            type();
        }
    
        updateRoleText();
    
        // Handle Contact Form Toggle
        const contactButton = document.getElementById('contact-button');
        const contactForm = document.getElementById('contact-form');
        const passwordOverlay = document.getElementById('password-overlay');
    
        contactButton.addEventListener('click', function () {
            contactForm.classList.toggle('hidden');
        });
    
        // Scroll Glow Effect
        const friendBoxes = document.querySelectorAll('.friend-box');
    
        function updateScrollGlow() {
            let scrollPosition = window.scrollY + window.innerHeight;
            friendBoxes.forEach(box => {
                const rect = box.getBoundingClientRect();
                const boxTop = rect.top + window.scrollY;
                const boxBottom = boxTop + rect.height;
                if (scrollPosition > boxTop && window.scrollY < boxBottom) {
                    box.classList.add('glow');
                } else {
                    box.classList.remove('glow');
                }
            });
        }
    
        window.addEventListener('scroll', updateScrollGlow);
        updateScrollGlow();
    
        // Center "Enter your name" box
        const passwordOverlayBox = document.querySelector('.password-box');
        passwordOverlayBox.style.margin = 'auto';
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        // Background music
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.5;
        backgroundMusic.play(); // Ensure the music plays when the page loads
    
        // Role Cycle Animation
        const roles = ['Web Designer', 'Phonk Lover', 'Video Editor', 'Gym Freak'];
        let currentRoleIndex = 0;
        const roleText = document.getElementById('role-text');
    
        function updateRoleText() {
            let text = roles[currentRoleIndex];
            let displayedText = '';
            let i = 0;
    
            function type() {
                if (i < text.length) {
                    displayedText += text.charAt(i);
                    roleText.textContent = displayedText;
                    i++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(deleteText, 1000);
                }
            }
    
            function deleteText() {
                displayedText = displayedText.slice(0, -1);
                roleText.textContent = displayedText;
                if (displayedText.length === 0) {
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    setTimeout(updateRoleText, 500);
                } else {
                    setTimeout(deleteText, 50);
                }
            }
    
            type();
        }
    
        updateRoleText();

     });
 
});
