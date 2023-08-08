document.addEventListener('DOMContentLoaded', ()=>{
    
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    };

    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#asunto');
    const inputContent = document.querySelector('#mensaje');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const form = document.querySelector('#formulario');

    inputEmail.addEventListener('blur', validate);
    inputSubject.addEventListener('blur', validate);
    inputContent.addEventListener('blur', validate);
    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        form.reset();
        checkEmail();

    });


    function validate(e){
        target = e.target.parentNode
        if(e.target.value.trim() ===''){
            email[e.target.name] = "";
            showAlert(e.target.id, target);
            checkEmail();
            return;
        } 

        if(!validateEmail(e.target.value) && e.target.id === 'email'){
            email[e.target.name] = "";
            showAlert('Email is not valid and', target);
            checkEmail();
            return;
        }

        cleanAlert(target);

        //? Assing the values to the object email
        email[e.target.name] = e.target.value.trim();
        console.log(email);

        //? Looking in the object if there is no empty value
        checkEmail();
    }

    function showAlert(msj, element){

        //?check if it is an alert
        cleanAlert(element);

        const error = document.createElement('P');
        error.textContent = `The ${msj} is obligatory`;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //?inyect error to html
        element.appendChild(error);

    }

    function cleanAlert(element){
        alert = element.querySelector('.bg-red-600');
        if (alert){
            console.log('aol');
            alert.remove();
        }

    }

    function validateEmail(email){
        console.log(email);
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }

    function checkEmail(){
        if(Object.values(email).includes("")){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }
});
