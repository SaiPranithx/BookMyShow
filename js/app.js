const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; 

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    
    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    
    slide.className = 'slider';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${10 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 10000);



jQuery(document).ready(function () {

    $('.login, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    

});




var modal = document.getElementById('id01');


if (target == modal) {
    modal.style.display = "none";
}