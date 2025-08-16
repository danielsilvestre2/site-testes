function menuSize() {
  if (window.innerWidth >= 650) {
    navtop.style.display = 'block'
  }
  else {
    navtop.style.display = 'none'
  }
}


function clickMenu() {
  if (navtop.style.display == 'block') {
    navtop.style.display = 'none'
  }
  else {
    navtop.style.display = 'block' 
  }
}