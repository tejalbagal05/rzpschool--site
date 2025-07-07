// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Toggle Navigation Menu for Mobile (Responsive)
const toggleButton = document.createElement('button');
toggleButton.classList.add('menu-toggle');
toggleButton.textContent = '☰';  // This creates a "hamburger" menu icon

document.querySelector('header nav').prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');  // Toggle active class to show/hide the menu
});

// Handle 'Translate' Button Click
document.getElementById('translate-btn').addEventListener('click', function() {
    const marathiText = document.getElementById('marathi-text');
    const englishText = document.getElementById('english-text');

    if (marathiText.style.display === "none") {
        marathiText.style.display = "block";
        englishText.style.display = "none";
        this.textContent = "Translate to English"; // Change button text back to 'Translate to English'
    } else {
        marathiText.style.display = "none";
        englishText.style.display = "block";
        this.textContent = "Translate to Marathi"; // Change button text to 'Translate to Marathi'
    }
});

// Gallery Buttons (You can add more interactivity as needed)
const galleryButtons = document.querySelectorAll('section#gallery button');
galleryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // You can replace this with actual gallery opening logic
    });
});

// Modal Gallery Logic 
// Modal Gallery Logic 

// Campus Photos
const campusModal = document.getElementById('gallery-modal');
const campusPhotosBtn = document.getElementById('campus-photos-btn');
const campusCloseBtn = campusModal.querySelector('.close');

// Open the campus modal
campusPhotosBtn.addEventListener('click', function () {
    campusModal.style.display = 'flex'; // Show the campus modal
});

// Close the campus modal
campusCloseBtn.addEventListener('click', function () {
    campusModal.style.display = 'none'; // Hide the campus modal
});

// Close the campus modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === campusModal) {
        campusModal.style.display = 'none'; // Hide the campus modal
    }
});

// Activity Photos
const activityModal = document.getElementById('activity-gallery-modal');
const activityPhotosBtn = document.getElementById('activity-photos-btn');
const activityCloseBtn = activityModal.querySelector('.close');

// Open the activity modal
activityPhotosBtn.addEventListener('click', function () {
    activityModal.style.display = 'flex'; // Show the activity modal
});

// Close the activity modal
activityCloseBtn.addEventListener('click', function () {
    activityModal.style.display = 'none'; // Hide the activity modal
});

// Close the activity modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === activityModal) {
        activityModal.style.display = 'none'; // Hide the activity modal
    }
});

// Garden Photos
const gardenModal = document.getElementById('garden-gallery-modal');
const gardenPhotosBtn = document.getElementById('garden-photos-btn');
const gardenCloseBtn = gardenModal.querySelector('.close');

// Open the garden modal
gardenPhotosBtn.addEventListener('click', function () {
    gardenModal.style.display = 'flex'; // Show the garden modal
});

// Close the garden modal
gardenCloseBtn.addEventListener('click', function () {
    gardenModal.style.display = 'none'; // Hide the garden modal
});

// Close the garden modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === gardenModal) {
        gardenModal.style.display = 'none'; // Hide the garden modal
    }
});




// Handle 'View Achievements' Button Click
document.getElementById('view-achievements-btn').addEventListener('click', function() {
    const achievementsList = document.getElementById('achievements-list');

    // Toggle the hidden-content class which handles the visibility and animation
    achievementsList.classList.toggle('hidden-content');
    
    // Change the button text based on whether the achievements list is visible or not
    if (achievementsList.classList.contains('hidden-content')) {
        this.textContent = "View Achievements"; 
    } else {
        this.textContent = "Hide Achievements";
    }
});
function toggleView() {
    var hiddenSection = document.getElementById("hiddenSection");
    var viewMoreBtn = document.getElementById("viewMoreBtn");

    // Toggle visibility of the section
    if (hiddenSection.style.display === "none") {
        hiddenSection.style.display = "block";
        viewMoreBtn.textContent = "View Less";
    } else {
        hiddenSection.style.display = "none";
        viewMoreBtn.textContent = "View More";
    }
}


