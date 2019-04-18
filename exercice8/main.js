'use strict';
console.log('hola');


//selecciono un estado del select y al pulsar el boton se pinta la cara feliz o la cara triste y se elige un numero aleatorio jasta 100 y si es par se pone un color amarillo de fondo y si no se pone el naranja

//Recojo los elementos html(contenedor, select y boton)
//poner listener al boton
//crear la funcion handler; recogera el estado del select y lo pinta en pantalla
const selectElement = document.getElementById('mood');
const buttonElement = document.querySelector('.btn');
const faceElement = document.querySelector('.container__face');
const backgroundElement = document.querySelector('.main__page');


function buttonHandlerClick (){
    console.log('click');
}

buttonElement.addEventListener('click',buttonHandlerClick );

//generara un nummerp aleatorio si es par amarillo y si es impar naranja


//diseño lo Ultimo