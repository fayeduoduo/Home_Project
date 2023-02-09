const body = document.body;
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});
