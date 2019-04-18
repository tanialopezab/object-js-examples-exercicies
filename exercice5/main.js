'use strict';


const inputElement = document.getElementById('insert');
const buttonElement = document.querySelector('.btn');


function buttonHandlerClick() {
    //const inputContent = inputElement.value;
    console.dir(inputElement);//imprimo el elemento con cosole dir y me da un pistado de cosas entre ellas:
    //VALUE = es el valor del input
    // nodeNAME = el nombre del elemento o de su etiqueta 
    //required = false (ya que no es un campo obligatorio para luego enviar a backend)
}



buttonElement.addEventListener('click', buttonHandlerClick);
