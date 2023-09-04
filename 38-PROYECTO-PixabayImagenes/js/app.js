const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
const pagintation = document.querySelector('#paginacion');

const perPage = 40;
let totalPages;
let iterator;
let actPag = 1;

document.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', validateForm);
});

function validateForm(e){
    e.preventDefault();

    const search = document.querySelector('#termino').value;

    if (search === ''){
        showAlert('Empty search!');
        return;
    }

    searchImgs();
}

function showAlert(msj){
    const alertExists = document.querySelector('.bg-red-100');
    if (!alertExists){
        const alert = document.createElement('P');
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class = "font-bold">Error!</strong>
            <span class = "block sm:inline"> ${msj}</span>
        `;

        form.appendChild(alert);

        setTimeout( ()=>{
            alert.remove();
        }, 3000);
    }
}

function searchImgs(){

    const lsearch = document.querySelector('#termino').value;

    const key = '39158248-3c32a5bfd508fd7c5bad5c254';
    const url = `https://pixabay.com/api/?key=${key}&q=${lsearch}&per_page=${perPage}&page=${actPag}`;

    fetch(url)
        .then(Response => Response.json())
        .then(result => {
            totalPages = calcPages(result.totalHits);
            paintImages(result.hits);
        })

}

function *createPaginator(total){
    for (let i=1; i<=total; i++){
        yield i;
    }
}

function paintImages(images){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }

    //?Iterate over the array
    images.forEach(img => {
        const {previewURL, likes, views, largeImageURL } = img;

        result.innerHTML += `
            <div class = "w-1/2 md:w=1/3 lg:w-1/4 p-3 mb-4">
                <div class = "bg-white"> 
                    <img class = "w-full" src = "${previewURL}">

                    <div class = "p-4">
                        <p class = "font-bold"> ${likes} <span class = "font-ligth"> Likes</span> </p>
                        <p class = "font-bold"> ${views} <span class = "font-ligth"> Views</span> </p>

                        <a href = "${largeImageURL}" target = "_blank" rel = "noopener noreferrer">
                            See Image 
                        </a>
                    </div>
                </div> 
            </div>

        `
    });
    //Clean the pagionation
    while(pagintation.firstChild){
        pagintation.removeChild(pagintation.firstChild);
    }
    //Pain the pagination
    paintPaginator();
}

function calcPages(total){
    return parseInt (Math.ceil (total/perPage));
}

function paintPaginator(){
    iterator = createPaginator(totalPages);

    while(true){
        const {value, done } = iterator.next();
        if(done) return;

        const btn = document.createElement('A');
        btn.href = '#';
        btn.textContent = value;
        btn.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-10', 'uppercase', 'rounded');
         
        btn.onclick = ()=>{
            actPag = value;
            searchImgs();

        };

        pagintation.appendChild(btn);
    }
}