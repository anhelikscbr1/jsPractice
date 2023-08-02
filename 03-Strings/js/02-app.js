//*Methods

//? lenght
console.log(product2.length);

//? indexOf, includes
console.log("indexOf: ", product2.indexOf("monitor"));
console.log("includes: ", product2.includes("monitor"));
console.log("includes: ", product2.includes("monitor"));

//? Concat
let firstName = "Juan ";
let lastName = "Perez";
let name = firstName.concat(lastName);
let anotherName = firstName + lastName;

console.log("concat: ", name);
console.log("concat +: ", anotherName);

//? Template strings
const mancha = "Mancha";
let templateSting = `En un lugar de la ${mancha} de cuyo nombre no quiero acordarme...`;
console.log("template string: " + templateSting);

//? Spaces
const product4 = "              2kkkd         ";
console.log("Spaces: " + product4);
console.log("trimStart().trimEnd(): " + product4.trimStart().trimEnd());
console.log("trim(): " + product4.trim());

//? Replace 
const string = "Nos prodigan sus libros infinitos"
console.log("replace: ", string.replace("Nos", "Les"));

//? Slice and substring
console.log("slice: ",  string.slice(2,10));
console.log("substring: ",  string.substring(0,10));

//? charAt
console.log("charAt: ", string.charAt(0));

//? repeat
console.log("repeat: ", string.repeat(2));

//? split
console.log("split: ", string.split(" "));

//? toUpperCae toLowerCase
console.log("toLowerCase: ", string.toLowerCase());
console.log("toUpperCase: ", string.toUpperCase());

//? toString
let num = 200;
num = num.toString();
console.log(num);