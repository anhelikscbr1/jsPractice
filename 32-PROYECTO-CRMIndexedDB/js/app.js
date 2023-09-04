(function(){

    let DB;
    const list = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', ()=>{
        createDB();

        if(window.indexedDB.open('crm', 1)){
            obtainClients();
        }

        list.addEventListener('click', deleteClient);
    });

    function deleteClient(e){
        if(e.target.classList.contains('delete')){
            const idDelete = Number(e.target.dataset.cliente);
            const deleteConf = confirm('Do you want to delete this client?');

            if(deleteConf){
                const transaction = DB.transaction(('crm'), 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idDelete);

                transaction.oncomplete = function(){
                    console.log('deleting');
                    window.location.href = './index.html';
                }

                transaction.onerror = function(){
                    console.log('Error');
                }
            }
        }
    }

    function createDB(){
        const createDB = window.indexedDB.open('crm', 1);

        createDB.onerror = function(){
            console.log('Error');
        }

        createDB.onsuccess = function(){
            DB = createDB.result;
        }

        createDB.onupgradeneeded = function(e){
            const db = e.target.result;

            const objectStore =  db.createObjectStore ('crm', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('name', 'name', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('tel', 'tel', {unique: false});
            objectStore.createIndex('enterprise', 'enterprise', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});
            
            console.log('DB created');
        }
    }

    function obtainClients(){
        const openCon = window.indexedDB.open('crm', 1);

        openCon.onerror = function(){
            console.log('Error on open DB');
        }

        openCon.onsuccess = function(){
            DB = openCon.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result;
                if(cursor){
                    const {uName, uEnterprise, uEmail, uTel, id} = cursor.value;

                    list.innerHTML += ` <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${uName} </p>
                                    <p class="text-sm leading-10 text-gray-700"> ${uEmail} </p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                    <p class="text-gray-700">${uTel}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                    <p class="text-gray-600">${uEnterprise}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 delete">Eliminar</a>
                                </td>
                            </tr>
                        `;
                    cursor.continue();
                }else{
                    console.log('end of registers');
                }
            }    
        }
    }
})();