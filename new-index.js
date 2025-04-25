let burgerIcon = document.getElementById('burgerIcon')
let menu = document.getElementById('menu')

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
document.getElementById("goReviews").addEventListener("click", () => {
  window.location.href = "vouches.html"
})
document.addEventListener("DOMContentLoaded", () => {
  let rentButton = document.querySelector(".button")

  rentButton.addEventListener("click", () => {
    window.location.href = "findacar.html"
  })
})
document.querySelector('.back-arrow').addEventListener('click', function() {
  window.location.href = 'index.html'
})