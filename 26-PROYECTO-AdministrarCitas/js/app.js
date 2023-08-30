const mascotaInpt = document.querySelector('#mascota');
const propietarioInpt = document.querySelector('#propietario');
const telefonoInpt = document.querySelector('#telefono');
const fechaInpt = document.querySelector('#fecha');
const horaInpt = document.querySelector('#hora');
const sintomasInpt = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');

const contCitas = document.querySelector('#citas');

let editando;

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

    pintarCitas(citas){
        this.borrarCitas();
        citas.forEach(cita => {
            const {mascota, propietario, fecha, hora, telefono, sintomas, id } = cita;
            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //scripting of each cite
            const mascotaP = document.createElement('H2');
            mascotaP.classList.add('card-title', 'font-weight-bolder');
            mascotaP.textContent = mascota;

            const propietarioP = document.createElement('P');
            propietarioP.innerHTML = `<span class = 'font-weight-bolder'>Propietario: </span> ${propietario}`;

            const telefonoP = document.createElement('P');
            telefonoP.innerHTML = `<span class = 'font-weight-bolder'>Telefono: </span> ${telefono}`;

            const fechaP = document.createElement('P');
            fechaP.innerHTML = `<span class = 'font-weight-bolder'>Fecha: </span> ${fecha}`;

            const horaP = document.createElement('P');
            horaP.innerHTML = `<span class = 'font-weight-bolder'>Hora: </span> ${hora}`;
            
            const sintomasP = document.createElement('P');
            sintomasP.innerHTML = `<span class = 'font-weight-bolder'>Sintomas: </span> ${sintomas}`;

            //Btn to delete
            const btnDelete = document.createElement('BUTTON');
            btnDelete.classList.add('btn', 'btn-danger', 'mr-2');
            btnDelete.textContent = 'Eliminar X';

            //Btn to edit
            const btnEditar = document.createElement('BUTTON');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.textContent = 'Editar';

            btnEditar.onclick = ()=> editarCita(cita);
            btnDelete.onclick = ()=> deleteCita(id);

            //Add the P's to the cite
            divCita.appendChild(mascotaP);
            divCita.appendChild(propietarioP);
            divCita.appendChild(telefonoP);
            divCita.appendChild(fechaP);
            divCita.appendChild(horaP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(btnDelete);
            divCita.appendChild(btnEditar);
            //Add the div to the html

            contCitas.appendChild(divCita);

        });
    }

    borrarCitas(){
        while(contCitas.firstChild){
            contCitas.removeChild(contCitas.firstChild);
        }
    }
}

class Citas {
    constructor(){
        this.citas = [];
    }

    addCita(obj){
        this.citas.push(obj);
    }

    editCita(newCita){
        this.citas = this.citas.map(cita => cita.id === newCita.id ? newCita : cita);
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

    if (editando){
        adminCitas.editCita({...citaObj});
        
        ui.showAlert('Editado correctamente');
        form.querySelector('.btn').textContent = 'CREAR CITA';
        editando = false;
    }else{
        citaObj.id = Date.now();
        adminCitas.addCita({...citaObj});
        ui.showAlert('Agregado correctamente');
    }

    resetObj();
    form.reset();
    ui.pintarCitas(adminCitas.citas);
}

function deleteCita(id){
    adminCitas.citas = adminCitas.citas.filter( cita =>cita.id ==! id);

    ui.showAlert('La cita se elimino correctamente');

    ui.pintarCitas(adminCitas.citas);
}

function editarCita(cita){
    const {mascota, propietario, fecha, hora, telefono, sintomas, id} = cita;
    mascotaInpt.value = mascota;
    propietarioInpt.value = propietario;
    fechaInpt.value = fecha;
    horaInpt.value = hora;
    telefonoInpt.value = telefono;
    sintomasInpt.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.telefono = telefono;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //change text of the btn
    form.querySelector('.btn').textContent = 'Editar';
    editando = true;
}