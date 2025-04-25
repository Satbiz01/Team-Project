let input = document.querySelector('.carInput');
let darkmode = document.querySelector('.darkmode');
let lightmode = document.querySelector('.lightmode');
let fullscreen = document.querySelector('.fullscreen')
let unfullscreen = document.querySelector('.unfullscreen')
let burgerIcon = document.getElementById('burgerIcon')
let menu = document.getElementById('menu')
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
let slideIndex = 0;
let slides = document.querySelectorAll('.myslide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function showSlide() {
  if (slides.length === 0) return;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides[slideIndex].style.display = "block";
}

showSlide();

if (next) {
  next.addEventListener('click', () => {
    slideIndex++;
    showSlide();
  });
}

if (prev) {
  prev.addEventListener('click', () => {
    slideIndex--;
    showSlide();
  });
}
let select = document.querySelector('.selection-filter');

if (select) {
  select.addEventListener('change', () => {
    let carsContainer = document.querySelector('.main-class-car-rent-catalog');
    let carItems = Array.from(document.querySelectorAll('.main-class-car-rent-catalog-item'));

    let sortedCars = carItems.sort((a, b) => {
      let priceA = parseInt(a.querySelector('img').getAttribute('data-price'));
      let priceB = parseInt(b.querySelector('img').getAttribute('data-price'));

      if (select.value === 'low') {
        return priceA - priceB;
      } else if (select.value === 'high') {
        return priceB - priceA;
      } else if (select.value === 'default') {
        return 0;
      }
    });

    carsContainer.innerHTML = '';
    sortedCars.forEach(car => {
      carsContainer.appendChild(car);
    });
  });
}
let topBTN = document.querySelector('.top-button')

if(topBTN){
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
      topBTN.style.display = 'block'
    } else{
      topBTN.style.display = 'none'
    }
  })
  topBTN.addEventListener("click", () => {
    window.scrollTo({ top: 0});
  });
}
let prevIMG = document.querySelector('.prev-img')
let nextIMG = document.querySelector('.next-img')
let indexIMG = 0;
let slidesIMG = document.querySelectorAll('.mers-slide');

function showSlidea() {
  if (slidesIMG.length === 0) return;

  slidesIMG.forEach((slide) => {
    slide.style.display = "none";
  });

  if (indexIMG >= slidesIMG.length) indexIMG = 0;
  if (indexIMG < 0) indexIMG = slidesIMG.length - 1;

  slidesIMG[indexIMG].style.display = "block";
}

showSlidea();

if (nextIMG) {
  nextIMG.addEventListener('click', () => {
    indexIMG++;
    showSlidea();
  });
}

if (prevIMG) {
  prevIMG.addEventListener('click', () => {
    indexIMG--;
    showSlidea();
  });
}

document.querySelector('.back-arrow').addEventListener('click', function() {
  window.location.href = 'index.html';
})

document.addEventListener("DOMContentLoaded", () => {
  let rentButton = document.querySelector(".button")

  rentButton.addEventListener("click", () => {
    window.location.href = "findacar.html"
  })
})

document.getElementById("rentBtn").addEventListener("click", function() {
  alert("Thank you for your order! We will contact you soon.")
})

burgerIcon.addEventListener('click', (e) => {
  e.preventDefault()

  if (menu.classList.contains('show')) {
    menu.classList.remove('show')
    burgerIcon.classList.remove('active')
  } else {
    menu.classList.add('show')
    burgerIcon.classList.add('active')
  }
})
document.getElementById("goHome").addEventListener("click", () => {
  window.location.href = "index.html"
})
document.getElementById("goPark").addEventListener("click", () => {
  window.location.href = "findacar.html"
})
document.getElementById("goRent").addEventListener("click", () => {
  window.location.href = "rental-cond.html"
})
document.getElementById("goReviews").addEventListener("click", () => {
  window.location.href = "vouches.html"
})