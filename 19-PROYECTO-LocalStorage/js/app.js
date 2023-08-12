//*Vriabnles
form = document.querySelector('#formulario');
tweetsList = document.querySelector('#lista-tweets');
let tweets = []
//*Listeners
eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTweet);


    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        
        createHTML();
    });
}

function addTweet(e){
    e.preventDefault();
    let tweet = document.querySelector('#tweet').value;
    console.log(tweet.trim());

    if(tweet.trim() === ''){
        showError("Empy X!!");
        return;
    }

    const tweetObj = {
        tweet: tweet,
        id: Date.now()
    }

    tweets.push(tweetObj);
    createHTML();
    //? cleaning the form
    form.reset();
}


function showError(error){
    const errorMsj = document.createElement('P');
    errorMsj.textContent = error;
    errorMsj.classList.add('error');
    form.appendChild(errorMsj);
    setInterval(()=>{
        errorMsj.remove();
    }, 2000);

}

function createHTML(){
    if (tweets.length > 0 ){
        rmTweets();
        console.log(tweetsList);
        tweets.forEach(tweet =>{
            const li = document.createElement('LI');
            li.textContent = tweet.tweet;
            tweetsList.appendChild(li);

            const a = document.createElement('A');
            a.textContent = 'X';
            a.classList.add('borrar-tweet');
            li.appendChild(a);

            a.onclick = ()=>{
                dltTweet(tweet.id);
            }
        });
    }
    syncStorage();
}

function rmTweets(){
    while(tweetsList.firstChild ){
        tweetsList.removeChild(tweetsList.firstChild);
    }
}

function syncStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function dltTweet(e){
    tweets = tweets.filter(tweet => tweet.id !== e);
    createHTML();
}