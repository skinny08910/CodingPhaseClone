var hamburger = document.getElementsByClassName('hamburger-icon')

var mobileMenu = document.getElementsByClassName('mobile-menu')

var clickedBtn = function() {
  mobileMenu[0].classList.toggle('active')
}

hamburger[0].addEventListener('click', clickedBtn)

console.log(hamburger[0])