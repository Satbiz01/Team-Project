let input = document.querySelector('.carInput');
input.addEventListener('input', ()=>{
  let filter = input.value.toLowerCase().trim();
  let cars = document.querySelectorAll('.main-class-car-rent-catalog li')

  cars.forEach(item =>{
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  })
})
class Cars{
  constructor(car1, car2, car3, car4,car5,car6){}
}
let cars = []