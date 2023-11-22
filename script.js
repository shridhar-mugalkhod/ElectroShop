function openProductDetail(productId) {
    window.location.href = `product.html`;
}

function openContactForm() {
    window.location.href = "contact-us.html";
}

function submitForm(event) {
    event.preventDefault();
    setTimeout(() => {
        document.getElementById("contactForm").reset();
        alert("Form submitted successfully!");
    }, 1000);
    
}

if (window.location.href.includes('product-detail.html')) {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (productId) {
        fetchProductDetails(productId);
    }
}

let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');

    slides.forEach(slide => (slide.style.display = 'none'));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 2000);

showSlide(currentSlide);
