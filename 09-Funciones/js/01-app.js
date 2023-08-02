//? Function definitions
n = mySquare(5);
console.log(n);
function mySquare (n){
    return n*n;
}

mySquare2  = function(n){
    return n*n;
}

n2 = mySquare2(4);
console.log(n2);

//? parameters
function helloword(name = "generic name"){
    console.log(`Hello again! ${name}`);
}

helloword("anhelik");
helloword();

//? Object methods
product = {
    name: "monitor",
    price: 499,
    show: function(user = "", name = this.name, price = this.price){
        console.log(`Hello!! ${user} the product: ${name} has a cost of ${price} USD`);
    }
}
product.show();



