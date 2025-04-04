let input = document.querySelector('.carInput');
let darkmode = document.querySelector('.darkmode');
let lightmode = document.querySelector('.lightmode');

if(input){
  input.addEventListener('input', ()=>{
    let filter = input.value.toLowerCase().trim();
    let cars = document.querySelectorAll('.main-class-car-rent-catalog li')
  
    cars.forEach(item =>{
      let text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    })
  })
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
