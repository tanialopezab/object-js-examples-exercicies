'use strict';

console.log('hola');
//CREO EL OBJETO CON SUS PROPIEDADES
let precioCoche;

const coche = {
    marca: "renault",
    añoMatrícula: 2002,
    color: "blanco",
    kilometros: 120000,
    precioventa: function (precioInicial) {
        const precio = (coche.añoMatrícula * 10) -(coche.kilometros * 0.001) + (precioInicial);
        return precio;
    }    
}

console.log(coche);

//CREO EL METODO

precioCoche = coche.precioventa(3000);

console.log(coche.marca, coche.añoMatrícula, coche.color, coche.kilometros, precioCoche);

//

