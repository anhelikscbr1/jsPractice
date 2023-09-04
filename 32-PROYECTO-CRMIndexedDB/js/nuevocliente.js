let DB;
(function (){
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', ()=>{
        connectDB();
    
        form.addEventListener('submit', validateClient );
    });

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

        createNewClient(client);
    }

    function createNewClient(client){
        const transaction = DB.transaction( ('crm'), 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(client);

        transaction.onerror = function(){
            console.log('Error on adding a client');
        }

        transaction.oncomplete = function(){
            showAlert('The client added correctly');
            form.reset();

            setTimeout(()=>{
                window.location.href = 'index.html';
            },1000);
        }
    }
})();
