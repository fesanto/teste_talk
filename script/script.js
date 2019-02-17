let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(a) {
    showSlides(slideIndex += a);
}

function currentSlide(a) {
    showSlides(slideIndex = a);
}

function showSlides(a) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (a > slides.length) { slideIndex = 1 }
    if (a < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}