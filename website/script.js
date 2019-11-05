var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.onscroll = () => {
    const nav = document.querySelector('#nav');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  };
