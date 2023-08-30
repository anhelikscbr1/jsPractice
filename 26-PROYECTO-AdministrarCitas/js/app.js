const mascotaInpt = document.querySelector('#mascota');
const propietarioInpt = document.querySelector('#propietario');
const telefonoInpt = document.querySelector('#telefono');
const fechaInpt = document.querySelector('#fecha');
const horaInpt = document.querySelector('#hora');
const sintomasInpt = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');

const contCitas = document.querySelector('#citas');

class UI{
    showAlert(msj, type){
        const divAlert = document.createElement('DIV');
        divAlert.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        if(type === 'error'){
            divAlert.classList.add('alert-danger');
        }else{
            divAlert.classList.add('alert-success');
        }

        divAlert.textContent = msj;
        
        //Add to the DOM
        form.appendChild(divAlert);

        setTimeout(()=>{
            form.removeChild(divAlert);
        },3000);
    }
}

class Citas {
    constructor(){
        this.citas = [];
    }

    addCita(obj){
        this.citas.push(obj);
    }
}

const ui = new UI();
const adminCitas = new Citas();

listeners();

function listeners(){
    mascotaInpt.addEventListener('input', citaChange);
    propietarioInpt.addEventListener('input', citaChange);
    telefonoInpt.addEventListener('input', citaChange);
    fechaInpt.addEventListener('input', citaChange);
    horaInpt.addEventListener('input', citaChange);
    sintomasInpt.addEventListener('input', citaChange);

    form.addEventListener('submit', nuevaCita);
}

citaObj = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    telefono: '',
    sintomas: '',
}

function citaChange(e){
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}

function resetObj(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.telefono = '';
    citaObj.sintomas = '';
}

function nuevaCita(e){
    e.preventDefault();
    
    const {mascota, propietario, fecha, hora, telefono, sintomas } = citaObj;

    if(mascota ==='' || propietario ==='' || fecha ==='' || hora === '' || telefono=== '' || sintomas === ''){
        ui.showAlert('Todos los campos son obligatorios', 'error');
        return;
    }

    citaObj.id = Date.now();

    adminCitas.addCita({...citaObj});

    resetObj();

    form.reset();

}