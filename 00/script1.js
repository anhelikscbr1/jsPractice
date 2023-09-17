//* Callback function
function orderPizza(cb){
    console.log('Ordering Pizza')
    setTimeout(() => {
        cb();
    }, 4000);
}

function eatPizza(){
    console.log('Pizza eaten');
}

function callFriend(){
    console.log('Calling a Friend');
}

orderPizza(eatPizza);
callFriend();

//* Promises

function tellMeWeather(){
    return new Promise((resolve, reject)=>{
       resolve('Sunny');
       reject('Error');
    })
}
function addIcon(icon){
    return new Promise(resolve=>{
        if(icon ==='Sunny'){
            resolve('Sunny Day!!!')
        }
    })
    
}
function onError(msj){
    console.log('Error');
}
function onSuccess(weather){
    console.log(weather);
}

tellMeWeather()
    .then(addIcon)
    .then(onSuccess, onError)