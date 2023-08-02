//* Objects

//? Object literal
const product = {
    name: "Monitor",
    price: 300,
    store: true
}

//? Accesing the data
console.log(product.name, product.price, product.store);
console.log(product.name);
console.log(product['price']);

//? add and delete properties
product.image = "image.jpg"
delete product.store;
console.log(product);

//? Assign properties to variables
const objectPrice = product.price;
console.log("objectPrice: " , objectPrice);

//?Object destructuring
const { price } = product;
console.log("Variable by destructuring: ", price);

const { name, image } = product;
console.log("Variables by destructuring: " ,name, image);

//? Nested objects
const product2 = {
    name: "intel i5",
    price: 245,
    productor: {
        country: "india",
        time: 400
    }    
}

console.log(product2.productor.country);

const {productor} = product2;
console.log(productor.country);