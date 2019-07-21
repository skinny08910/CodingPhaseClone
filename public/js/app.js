var hamburger = document.getElementsByClassName('hamburger')

var rightMenu = document.getElementsByClassName('right-menu')

var clickedBtn = function() {
  rightMenu[0].classList.toggle('active')
}

hamburger[0].addEventListener('click', clickedBtn)

console.log(hamburger[0])