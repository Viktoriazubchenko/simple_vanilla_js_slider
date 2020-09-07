let slides = document.querySelectorAll('.slider-item');
let dotsWrap = document.querySelector('.slider-dots');
let dots = document.querySelectorAll('.dot');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let slideIndex = 1;

function showSlide(num){
    if(num > slides.length){
        slideIndex = 1;
    }
    if(num < 1){
        slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

showSlide(slideIndex);

function changeSlide(num){
    showSlide(slideIndex += num);
}

function currentSlide(num){
    showSlide(slideIndex = num);
}

prev.addEventListener('click', function(){
    changeSlide(-1);
})

next.addEventListener('click', function(){
    changeSlide(1);
})

dotsWrap.addEventListener('click', function(event){
    for (let i = 0; i < dots.length + 1; i++){
        if( event.target.classList.contains('dot') && event.target == dots[i - 1]){
            currentSlide(i);
        }
    }
});

