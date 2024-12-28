document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-container');
    const images = document.querySelectorAll('.slider-container img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateSlider();
    });

    next.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateSlider();
    });
});