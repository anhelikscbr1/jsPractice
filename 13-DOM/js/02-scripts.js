//? removig element with remove()
const a = document.querySelector('a');
console.log(a);
a.remove();

//? adding HTML content
const navMenu = document.querySelector('nav');
const newA = document.createElement('A');
newA.textContent = "newA";
newA.href = "#"
navMenu.appendChild(newA);

//? insertBefore
const before = document.createElement('A');
before.textContent = "Before";
navMenu.insertBefore(before, navMenu.lastElementChild);