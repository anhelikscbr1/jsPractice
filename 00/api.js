//* API example
const form = document.querySelector('form');
const search = document.querySelector('.search');
const body = document.querySelector('body');
const container = document.querySelector('.container');
document.addEventListener('DOMContentLoaded', function(){
    initListeners();
});

function initListeners(){
    form.addEventListener('submit', initSearch);
}

function initSearch(e){
    e.preventDefault();
    searchParam = search.value;
    //startAPI(searchParam);
    startAsyncAPI(searchParam);
}

function startAPI(searchParam){
    //let url = `https://pixabay.com/api/?key=39158248-3c32a5bfd508fd7c5bad5c254&q=${searchParam}&image_type=photo`;
    //let url = 'hkdasjdh';
    fetch(url)
        .then(response => response.json())
        .then(data => {painImages(data.hits)})
        .catch(err => console.log(err));
}

async function startAsyncAPI(searchParam){
    //let url = `https://pixabay.com/api/?key=39158248-3c32a5bfd508fd7c5bad5c254&q=${searchParam}&image_type=photo`;
    let url = 'hkdasjdh';
    try{
        let data = await fetch(url);
        data = await data.json();
        painImages(data.hits)
    }catch(err){
        console.log('My error',err);
    }

}

function painImages(data){
    deleteImages();
    data.forEach(element => {
        const img = document.createElement('IMG');
        img.src = element.previewURL;
        img.style = 'padding: 20px;'
        container.appendChild(img);
    });
}

function deleteImages(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}