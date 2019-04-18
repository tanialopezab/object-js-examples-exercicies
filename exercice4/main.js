'use strict';

const buttonElement = document.querySelector('.btn');
function buttonHandlerClick(event) {
    console.log(event);
}

buttonElement.addEventListener('click', buttonHandlerClick);


//Respuesta, la propiedad type del objeto Evento es una PROPIEDAD DE CONTROL  del evento que devuelve el tipo de evento que se ha producido sin prefijos en este caso devuelve "click"