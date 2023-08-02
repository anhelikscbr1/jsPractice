//?Object constructor

function genericProduct(name, price){
    this.name = name;
    this.price = price;
    this.store = true;
}

const product6 = new genericProduct("Samsung TV", 300);
console.log(product6);
