//? scroll events

window.addEventListener('scroll', ()=>{
    //const scrollPX = window.scrollY;
    const premium = document.querySelector('.premium');
    const ubi = premium.getBoundingClientRect();
    console.log(ubi);
    if(ubi['y'] <= 0){
        console.log('you are not below');
    }
});