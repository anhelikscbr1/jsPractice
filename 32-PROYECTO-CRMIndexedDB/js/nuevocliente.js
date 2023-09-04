(function (){
    let DB;
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', ()=>{
        connectDB();
    
        form.addEventListener('submit', validateClient );
    });

    function connectDB(){
        const openCon = window.indexedDB.open('crm', 1);

        openCon.onerror = function(){
            console.log('No connection to DB');
        };

        openCon.onsuccess = function(){
            DB = openCon.result;
        };
    }

    function validateClient(e){
        e.preventDefault();
        uName = document.querySelector('#nombre').value;
        uTel = document.querySelector('#telefono').value;
        uEmail = document.querySelector('#email').value;
        uEnterprise = document.querySelector('#empresa').value;

        if(uName === '' || uTel === '' || uEmail === '' || uEnterprise === ''){
            showAlert('All camps are obligatory', 'error');
            return;
        }

        const client = {uName, uTel, uEmail, uEnterprise, id: Date.now()};
        console.log(client);

    }

    function showAlert(msj, type){

        const alert = document.querySelector('.alert');

        if(alert){
            return;
        }
        const divMsj = document.createElement('DIV');
        divMsj.textContent  = msj;
        divMsj.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alert');

        if( type === 'error'){
            divMsj.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        }else{
            divMsj.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }
        form.appendChild(divMsj);

        setTimeout( ()=>{
            divMsj.remove();
        }, 3000);
    }

    

})();
