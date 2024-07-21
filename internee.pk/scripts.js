// scripts.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function loadContent() {
    const contentDiv = document.getElementById('dynamic-content');
    contentDiv.innerHTML = `
        <p>New dynamic content loaded!</p>
        <p>More dynamic content...</p>
    `;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let valid = true;

    if (name.trim() === "") {
        showError('nameError', 'Name is required.');
        valid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format.');
        valid = false;
    }

    if (message.trim() === "") {
        showError('messageError', 'Message is required.');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Submit form or perform desired actions
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(el) {
        el.style.display = 'none';
    });
}

// Initialize first slide as active
slides[currentSlide].classList.add('active');
