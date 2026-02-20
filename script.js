// Copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const address = button.getAttribute('data-address');
        navigator.clipboard.writeText(address).then(() => {
            alert('Address copied!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

// Slideshow (left to right slide)
let slideIndex = 0;
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
    setTimeout(showSlides, 5000); // Every 5 seconds
}

showSlides();