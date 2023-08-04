const header = document.querySelector('.contenido-hero h1');

header.textContent = 'ya no quiero na';

//? Remove and add classes
header.classList.add('newClass', 'anotherClass');
header.classList.remove('anotherClass');
console.log(header);

//? Accesing css
header.style.backgroundColor = "red";

//? children
const nav = document.querySelector(".navegacion").children[0];
console.log(nav);

//?traversing the DOM
const card = document.querySelectorAll('.card')[2].children[0];
card.src = "img/hacer3.jpg"
console.log(card);

//?Accesing the parent with parentElement
console.log(card.parentElement.parentElement);

//?nextElementSibling
console.log(card.parentElement.nextElementSibling)

//?previousElementSibling
console.log(card.parentElement.previousElementSibling)

//?firstElementChild
console.log(card.parentElement.parentElement.firstElementChild);

//?lastElementChild
console.log(card.parentElement.parentElement.lastElementChild);