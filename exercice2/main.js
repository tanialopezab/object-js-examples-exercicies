'use strict'

const adalaber1 = {};

adalaber1.name = "Susana";
adalaber1.age = 34 + " years";
adalaber1.job = "journalist";

adalaber1.run = function (phrase){
    //console.log(phrase);
    return phrase;
    }

adalaber1.runAMarathon = function (distance){
    console.log(`${adalaber1.run('yo estoy corriendo')} una maratón de ${distance} km`);
}
//todos los métodos llevan un paréntesis
// el parénteis lleva el argumento 'yo estoy corriendo'
//llega a esta funcion tras haber pasado por el metodo .run, recoje el return de esta función y luego añade el string + el argumento del parametro

console.log(adalaber1.run('yo estoy corriendo'));//se llama a la funcion con el nombre del método del objeto y lo muestra en pantalla.

adalaber1.runAMarathon(50);// se pone el argumento del parámetro que recibirña la función