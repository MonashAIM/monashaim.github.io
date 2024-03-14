let navMenu = document.querySelector('.mobile-menu');

let navActive = false;

function handleNavMenuClick() {
  if (!navActive) {
    document.getElementById("mobile-nav-menu").classList.add('active')
  }
  else {
    document.getElementById("mobile-nav-menu").classList.remove('active')
  }

  navActive = !navActive;
  console.log("nav menu clicked")
}

navMenu.addEventListener("mouseup", handleNavMenuClick)