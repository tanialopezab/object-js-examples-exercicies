'use strict'

const adalaber1 = {};

adalaber1.name = "Susana";
adalaber1.age = 34 + " years";
adalaber1.job = "journalist";

adalaber1.run = function (phrase){
    console.log(phrase);
    return phrase;
    }

adalaber1.runAMarathon = function (distance){
    console.log(`${adalaber1.run('yo estoy corriendo')} una maratón de ${distance} km`);
}

adalaber1.run('yo estoy corriendo');//se llama a la funcion con el nombre del método del objeto

adalaber1.runAMarathon(50);