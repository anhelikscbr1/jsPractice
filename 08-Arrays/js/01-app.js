//* Arrays

const myArray = [10, 304, -3, 10];
console.table(myArray);

//? add values to the array 
let months = ["jen", "feb", "mar", "may"];

//?by the index
months[4] = "jun"; 
months[10] = "oct";
console.table(months);

//? .push() append values to the array
months = ["jen", "feb", "mar", "may"];
months.push("jun", "jul");
console.table(months);

//? .unshift() append values at start of the array
months.unshift("init");
console.table(months);

//? spread operator
let res;
const numbers1 = [1,65,78,99];
const numers2 = [93, 4,23,-0];

res = [...numbers1, ...numers2];
console.log(res);

//? .pop() Delate elements at the end of thew array
let arr = [1,2,3,4,5];
arr.pop();
console.log(arr);

//?.shift() Delate elements at the start of the arrar
arr.shift();
console.log(arr);

//?splice: Delate elements inside the array
arr = [0,1,2,3,4,5,6,7];
arr.splice(3,1);
console.log(arr);

arr = [0,1,2,3,4,5,6,7];
arr.splice(0,3);
console.log(arr);