let asd = document.querySelector('.open') 
let modalC = document.querySelector('.modal-container')
let ddd = document.querySelector('.close')


asd.addEventListener('click', ()=>{
  modalC.classList.add('show')
})
ddd.addEventListener('click', ()=>{
  modalC.classList.remove('show')
})
