//*Arrow functions

//? A function without arrow functions
myFunction = function(name){
    console.log(`Hello! ${name}`);
}
myFunction("Laura");

//?A function with arrow functions

//? Full expression
myFunction2 = (name)=> {
    console.log(`Hello ${name}`);
};
myFunction2("Pedro");

//? Another way
myFunction3 = name => console.log(`Hello ${name}`);
myFunction3("Roberto");
