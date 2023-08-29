//* Variables
const form =  document.querySelector('#agregar-gasto');
const list = document.querySelector('#gastos ul');


document.addEventListener('DOMContentLoaded', ()=>{
    askBudget();
    form.addEventListener('submit', addItem);
})

//* class

class Budget {
    constructor(budget){
        this.budget = Number(budget);
        this.remain = Number(budget);
        this.moves = []
    }

    newItem(i){
        this.moves.push(i);
    }
}

class UI {
    paintBudget (obj){
        console.log(obj);
        document.querySelector('#total').textContent = obj.budget;
        document.querySelector('#restante').textContent = obj.remain;
    }

    delateMoves(){
        while(list.firstElementChild !== null){
            list.removeChild(list.firstElementChild);
        }
    }

    paintMoves(moves){
        moves.forEach( move =>{
            //create an LI element
            const li = document.createElement('LI')
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.setAttribute('data-id', move.id);
            console.log(li)

            //Create the innerHTML
            li.innerHTML = `${move.name} <span class = "badge badge-primary badge-pill" >  $${move.quant} <span/>`;

            //add delete btn
            const btn = document.createElement('button');
            btn.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btn.textContent = 'Borrar X';
            li.appendChild(btn);

            //Show in html
            list.appendChild(li);
        })
    }

    printAlert(msj, type){
        const divAlert = document.createElement('DIV');
        divAlert.classList.add('text-center', 'alert')
        if(type === 'error'){
            divAlert.classList.add('alert-danger');
        } else{
            divAlert.classList.add('alert-success');
        }
        divAlert.textContent = msj;
        document.querySelector('.primario').insertBefore(divAlert, form);
        
        setTimeout( ()=>{
            divAlert.remove();
        }, 3000);

    }
}

let budget;
const ui = new UI();

function askBudget(){
    bdgtUsr = prompt('What is your budget?');
    bdgtUsr = parseFloat(bdgtUsr);
    console.log(bdgtUsr);

    if (bdgtUsr === '' || bdgtUsr == null || !bdgtUsr || bdgtUsr <= 0) window.location.reload();

    budget = new Budget(bdgtUsr);

    ui.paintBudget(budget);
}


function addItem(e){
    e.preventDefault();

    const name = document.querySelector('#gasto').value;
    const quant = document.querySelector('#cantidad').value;

    if (name === '' || quant ===''){
        ui.printAlert('All the camps are obligatory', 'error');
        return;
    }else if( quant <= 0 || isNaN(quant)){
        ui.printAlert('No valid number', 'error');
        return;
    }

    const item = {name, quant, id: Date.now()}
    budget.newItem(item);
    ui.printAlert('Nice!','a');

    budget.budget = budget.budget - quant;
    ui.paintBudget(budget);

    ui.delateMoves();
    ui.paintMoves(budget.moves);
    form.reset()
}