console.log("loaded js")

window.onload = function () {

  let drawerEntries = document.getElementById("mobile-drawer").querySelectorAll('a[href^="#"]');
  if (!!drawerEntries) {
    for (let entry of drawerEntries) {
      entry.addEventListener("click", toggleMenu);
    }
  }

}


// Mobile Menu handler
function toggleMenu() {
  // TODO remove animation on loca, and add it after the first time the menu button is clicked
  document.getElementById("menu-btn").classList.toggle('opened');
  document.getElementById("mobile-h1").classList.toggle('opened');
  if (document.getElementById("mobile-drawer").classList.toggle('opened')) {
    document.body.setAttribute("style", "overflow: hidden");
  } else {
    document.body.setAttribute("style", "");
  }  
}

function toggleSocialMenu() {
  document.getElementById("social-menu").classList.toggle('opened');
  document.getElementById("social-links").classList.toggle('opened');
  document.getElementById("mobile-social").classList.toggle('opened');
}

function scrollToTop() {
  window.scrollTo(0, 0);
}