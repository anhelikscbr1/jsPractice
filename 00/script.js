class person {
    constructor(name){
        this.name = name;
    }
    sayhi(){
        console.log('Say Hi');
    }
}

function personFactory(name){
    this.name = name;
    this.sayhi = function(){
        console.log('hi');
    }
}

const car = {
    watch(){
        console.log('watching');
    }
}

anotherCar = new Object();
anotherCar.__proto__.watch = function(){ console.log('watching')};  //!Not do this!!! Changing also Object.prototype

const Juan = new personFactory('Juan');
const Me = new person('Me');
console.log(Juan);
console.log(Me);
console.log(car);
console.log(anotherCar);

car.watch();
anotherCar.watch();

const test = {
    name: 'Juan',
    testf : function time() {
        setTimeout(()=>{
            console.log('obj', this.name);
        }, 200);
    }
}

test.testf();

const body = document.querySelector('body');
const p = document.createElement('P');
p.textContent = 'en un lugar d ela mancha';
body.appendChild(p);
body.addEventListener('click', function(){
    console.log('haa', this);
})