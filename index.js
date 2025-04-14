let input = document.querySelector('.carInput');
let darkmode = document.querySelector('.darkmode');
let lightmode = document.querySelector('.lightmode');
let fullscreen = document.querySelector('.fullscreen')
let unfullscreen = document.querySelector('.unfullscreen')
let selection = document.querySelector('.selection-filter')
let carsList = document.querySelector('.main-class-car-rent-catalog');
if (input) {
  input.addEventListener('input', () => {
    let filter = input.value.toLowerCase().trim();
    let cars = document.querySelectorAll('.main-class-car-rent-catalog-item');

    cars.forEach(item => {
      let nameElement = item.querySelector('.invisible-car-name');
      let text = nameElement.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
}

if(lightmode && darkmode){
  lightmode.addEventListener('click', ()=>{
    lightmode.style.display = 'none'
    darkmode.style.display = 'flex'
  })
  darkmode.addEventListener('click', ()=>{
    lightmode.style.display = 'flex'
    darkmode.style.display = 'none' 
  })
}

if(fullscreen && unfullscreen){
  fullscreen.addEventListener('click', ()=>{
    fullscreen.style.display = 'none'
    unfullscreen.style.display = 'flex'
  })
  unfullscreen.addEventListener('click', ()=>{
    fullscreen.style.display = 'flex'
    unfullscreen.style.display = 'none'
  })
}
let slideIndex = 0
let next = document.querySelector('.next')
let old = document.querySelector('.old')
let slides = document.querySelectorAll('.myslide')


function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  }); 
  slides[slideIndex].style.display = "block";
}

showSlide();

next.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide();
});

old.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide();
});