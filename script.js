document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const simulationButtons = document.querySelectorAll('.simulation-card .secondary-btn');
    const modal = document.getElementById('simulation-modal');
    const closeModal = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const simulationData = {
        'underwriter': {
            title: 'Medical Underwriter Simulation',
            description: 'Assess records, identify risks, and make informed decisions on policies. Gain practical experience in risk assessment and policy formulation for a successful career.'
        },
        'analyst': {
            title: 'Financial Analyst Simulation',
            description: 'Analyze complex financial data, build robust models, and interpret market trends to provide insightful investment recommendations.'
        },
        'support': {
            title: 'IT Support Simulation',
            description: 'Diagnose and solve technical issues for end-users, mastering troubleshooting techniques and customer service skills in a simulated environment.'
        },
        'hr': {
            title: 'HR Coordinator Simulation',
            description: 'Handle employee records, manage internal communications, and assist with various HR tasks, preparing you for a role in human resources.'
        }
    };

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    simulationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const data = simulationData[id];
            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;
                modal.classList.remove('hidden');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // --- Slideshow Logic ---
    let slideIndex = 0; // Initialize to 0, showSlides will increment to 1 for first slide
    let slideshowInterval; 

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment slideIndex and loop if at the end
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Remove active class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }

        // Display the current slide and mark the active dot
        // Ensure slides[slideIndex-1] exists before trying to access its style
        if (slides[slideIndex - 1]) {
            slides[slideIndex-1].style.display = "block";
        }
        if (dots[slideIndex - 1]) {
            dots[slideIndex-1].className += " active-dot";
        }

        // Clear and restart the auto-play timer
        clearTimeout(slideshowInterval);
        slideshowInterval = setTimeout(showSlides, 5000);
    }

    // Function to change slide when a dot is clicked
    // Make sure this function is globally accessible if called from onclick in HTML
    window.currentSlide = function(n) {
        slideIndex = n - 1; // Adjust for 0-based index for the next showSlides call
        showSlides(); // Call showSlides to display the clicked slide
    }

    // Initial call to start the slideshow
    // Only call this if slides actually exist to avoid errors
    if (document.getElementsByClassName("mySlides").length > 0) {
        showSlides();
    }

    document.getElementById('simulationSearch').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.simulation-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const searchInput = document.getElementById('simulationSearch');
const categorySelect = document.getElementById('roleCategory');
const simulationCards = document.querySelectorAll('.simulation-card');

function filterSimulations() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    simulationCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');

        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterSimulations);
categorySelect.addEventListener('change', filterSimulations);


}); 