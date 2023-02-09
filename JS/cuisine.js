// first
function goto(n) {
  var slides= document.getElementsByClassName('slider');
  for (var i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    slides[n-1].style.display= "";
}

// sencond
function gotoo(n) {
  var lides= document.getElementsByClassName('sliders');
  for (var i=0; i < lides.length; i++) {
    lides[i].style.display = "none";
  }
    lides[n-1].style.display= "";
}

// third
function gotol(n) {
  var lide= document.getElementsByClassName('sli');
  for (var i=0; i < lide.length; i++) {
    lide[i].style.display = "none";
  }
    lide[n-1].style.display= "";
}

// fourth
function gotoy(n) {
  var lides= document.getElementsByClassName('Sliders');
  for (var i=0; i < lides.length; i++) {
    lides[i].style.display = "none";
  }
    lides[n-1].style.display= "";
}


//nav
const body = document.body;
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});
