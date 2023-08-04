//*Events 

//? DOMContentLoaded
document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOMLoades');
});

//? Mouse events
const nav = document.querySelector('nav');
//*? (click, mousedown), dbclick, mouseout, mousenter, mouseup
nav.addEventListener('mouseenter', ()=>{
    console.log('entering to the nav');
})

//? keyboard events

//? keyup, keydown, copy, paste, cut
//? input
//?blur: when you click outside the form

const formText = document.querySelector('.busqueda');
formText.addEventListener('input', (e)=>{
    console.log(e.target.value);
});

//? form events
const form = document.querySelector('#formulario');
console.log(form);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e.target.method);
    console.log(e.target.action);
    console.log(e);
});
