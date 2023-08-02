const myArray2 = [0,10,20,30,40,50];

//? forEach( )
myArray2.forEach(i => console.log(i));

myArray2.forEach(function(i){
    console.log(i);
});

//? map();
const aa = myArray2.map( i => {
    return(i)
});
console.table(aa);