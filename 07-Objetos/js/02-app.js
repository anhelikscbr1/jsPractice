"use strict"; //? 

//* Object freeze

const object3 = {
    name: "4K Monitor",
    price: 393,
    store: true
}

const object4 = {
    name: "4K Monitor",
    price: 393,
    store: true
}

const loc = {
    location: "Alabama"
}

const details = {
    size: "3000m"
}

//? Object.freeze()------We cannot add, modify or delete properties
Object.freeze(object3);
console.log("isFrozen(): ", Object.isFrozen(object3));

//? Object.seal()-----We cannot add or delete properties but we can modify them
Object.seal(object4);
console.log("isSealed(): ", Object.isSealed(object3));
object4.price = 0;
console.log(object4);

//? Add up 2 objects
const result = Object.assign(loc, details);
console.log(result);

//? Add up with sread or rest operator
const sameResult = {...loc, ...details};
console.log(sameResult);

//? Object methotds
const product5 = {
    name: "PSU Asus",
    showInfo: function (){
        console.log(`Product name: ${this.name}`);
    }
};

product5.showInfo();

//? Object.keys()
console.log("keys: ", Object.keys(product5));

//? Object.values()
console.log("values: ", Object.values(product5));

//? Object.entries()
console.log("entries: ", Object.entries(product5));