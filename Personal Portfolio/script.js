// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target element by its href attribute
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Scroll smoothly to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the mobile menu
    mobileMenu.classList.toggle('hidden');
});
