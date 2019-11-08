var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

window.onscroll = () => {
  const nav = document.querySelector("#nav");
  const slideBar = document.querySelector("#slide-bar");
  if (this.scrollY <= 10) {
    nav.className = "";
    slideBar.className = "";
  } else {
    nav.className = "scroll";
    slideBar.className = "scroll";
  }
};

function openNav() {
  document.getElementById("slide-bar").style.width = "300px";
}

function closeNav() {
  document.getElementById("slide-bar").style.width = "0";
}
