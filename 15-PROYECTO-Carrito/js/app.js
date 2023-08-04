//*Variables

const cart = document.querySelector('#carrito');
const courses = document.querySelector('#lista-cursos');
const cartContainer = document.querySelector('#lista-carrito tbody');
const emptyCart = document.querySelector('#vaciar-carrito');
let cartArticles = [];


loadListeners();

function loadListeners(){
    courses.addEventListener('click', addCourse);
    
    //delete a course
    cart.addEventListener('click', deleteCourse);

    //empty the cart
    emptyCart.addEventListener('click', emptyCartFunc)
}

function emptyCartFunc(){
    cartArticles = []
    cartHTML();
}

function deleteCourse(e){
    if (e.target.classList.contains('borrar-curso')){
        const dltID = e.target.getAttribute('data-id');
        cartArticles = cartArticles.filter(course => course.id != dltID)
    }
    cartHTML();


}

function addCourse(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        readData(e.target.parentElement.parentElement);
    }
}

function readData(e){
    //? Create an object with the data of the course chosen by the user
    const courseInfo = {
        img : e.querySelector('img').src,
        name: e.querySelector('h4').textContent,
        price: e.querySelector('.precio span').textContent,
        id: e.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }
    let aux = false; 
    cartArticles.forEach(course =>{
        if (course.id === courseInfo.id){
            aux = true;
            course.quantity+=1;
        }
    });
    
    if(!aux) cartArticles.push(courseInfo);
    //cleanHTML();
    cartHTML();
}

function cartHTML(){
    cleanHTML();
    cartArticles.forEach(course =>{
        const row = document.createElement('TR');
        row.innerHTML = 
        `
            <td>
                <img src = ${course.img} alt = "img"></img> 
            </td>
            <td> ${course.name} </td>
            <td> ${course.price}  </td>
            <td> ${course.quantity}  </td>
            <td>
                <a class = "borrar-curso" href="#" data-id=${course.id}> X </a>
            </td>
        `;
        cartContainer.appendChild(row);
    });
}

function cleanHTML(){
    //! Slow way of cleaning
    //cartContainer.innerHTML = '';

    while(cartContainer.firstChild){
        cartContainer.removeChild(cartContainer.firstChild);
    }
}