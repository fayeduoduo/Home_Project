var index =1;
autoPlay();

function autoPlay(n) {
  var sliders = document.getElementsByClassName('slider');
  for (var i=0; i<sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  if (index >sliders.length) {index = 1}
  sliders[index-1].style.display = "";
  index++;

  setTimeout(autoPlay,9000);
}

//nav
const body = document.body;
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});
