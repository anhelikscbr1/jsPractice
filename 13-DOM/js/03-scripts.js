//* An example with js

const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btn.addEventListener('click', function(){
    if( footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btn.classList.remove('activo');
    }else{
        footer.classList.add('activo');
        btn.classList.add('activo');
    }
});