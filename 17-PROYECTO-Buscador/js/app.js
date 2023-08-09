//*variables
const result = document.querySelector('#resultado');
const brand = document.querySelector('#marca');
const year = document.querySelector('#year');
const minPrice = document.querySelector('#minimo');
const maxPrice = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmition = document.querySelector('#transmision');
const color = document.querySelector('#color');

//* an object to hold the values of the search
const search = {
    brand: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    doors: '',
    transmition: '',
    color: '',
}

//*functions
document.addEventListener('DOMContentLoaded', ()=>{
    showCars(autos); 
    fillSelect();
});

brand.addEventListener('change', (e)=>{
    search.brand = e.target.value;
    filterCar();
})
year.addEventListener('change', (e)=>{
    search.year = e.target.value;
    filterCar();
})
minPrice.addEventListener('change', (e)=>{
    search.minPrice = e.target.value;
    console.log(search.minPrice)
    filterCar();
})
maxPrice.addEventListener('change', (e)=>{
    search.maxPrice = e.target.value;
    filterCar();
})
transmition.addEventListener('change', (e)=>{
    search.transmition = e.target.value;
})
doors.addEventListener('change', (e)=>{
    search.doors = e.target.value;
})
color.addEventListener('change', (e)=>{
    search.color = e.target.value;
    console.log(search);
})

function showCars(autos){
    autos.forEach(car => {
        const {marca, modelo} = car;
        const carHTML = document.createElement('P');
        carHTML.textContent = `
            ${marca}  ${modelo}
        `;
        result.appendChild(carHTML);
        
    });
}

function fillSelect(){
    for (let i = 2023; i >= 2015; i--){
        const a = document.createElement('OPTION');
        a.textContent = i;
        a.value = i;
        year.appendChild(a)
    }
}

function filterCar(){
    const res = autos.filter(brandFilter). filter(yearFilter) .filter(minFilter)
                .filter(maxFilter);
    console.log(res);
    cleanCars();
    showCars(res);
}

function brandFilter(car){
    if (search.brand){
        return car.marca === search.brand;
    }
    return car;
}

function yearFilter(car){
    if(search.year){
        return car.year === parseInt(search.year);
    }
    return car;
}

function minFilter(car){
    if(search.minPrice){
        return car.precio >= parseInt(search.minPrice);
    }
    return car;
}

function maxFilter(car){
    if(search.maxPrice){
        return car.precio <= parseInt(search.maxPrice);
    }
    return car;
}

function cleanCars(){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}