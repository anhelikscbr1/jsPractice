(function() {
    let DB;
    let idClient;
    nameInpt = document.querySelector('#nombre');
    telInpt = document.querySelector('#telefono');
    emailInpt = document.querySelector('#email');
    enterpriseInpt = document.querySelector('#empresa');

    form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', ()=>{

        form.addEventListener('submit', updateClient);

        connectDB();
        const paramsURL = new URLSearchParams(window.location.search);
        idClient = paramsURL.get('id');
        if(idClient){
            setTimeout(() => {
                getClient(idClient);
            }, 100);
        }
    });

    function updateClient(e){
        e.preventDefault();

        if(nameInpt.value === '' || emailInpt.value === '' ||enterpriseInpt.value=== '' || telInpt.value === ''){
            console.log('all campos are');
            showAlert('All camps are obligatory', 'error');
            return;
        }

        const updatedClient = {
            uName : nameInpt.value,
            uEmail : emailInpt.value,
            uEnterprise : enterpriseInpt.value,
            uTel : telInpt.value,
            id: Number(idClient)
        }
        const transaction = DB.transaction(('crm'), 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(updatedClient);

        transaction.oncomplete = function(){
            showAlert('Client updated');
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1000);
        }
    }

    function getClient(id){
        const transaction = DB.transaction(('crm'), 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const client = objectStore.openCursor();
        client.onsuccess = function(e){
            const cursor = e.target.result;
            if(cursor){
                if(cursor.value.id === Number(id)){
                    fullfilForm(cursor.value);
                    console.log(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function fullfilForm(client){
        const {uName, uTel, uEmail, uEnterprise} = client;
        nameInpt.value = uName;
        telInpt.value = uTel;
        emailInpt.value = uEmail;
        enterpriseInpt.value = uEnterprise;
    }


    function connectDB(){
        const openCon = window.indexedDB.open('crm', 1);

        openCon.onerror = function(){
            console.log('No connection to DB');
        };

        openCon.onsuccess = function(){
            DB = openCon.result;
        };
    }
})();