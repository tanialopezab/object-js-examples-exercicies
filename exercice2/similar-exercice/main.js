'use strict';

console.log('hola');
//CREO EL OBJETO CON SUS PROPIEDADES
let precioCoche;//variable que se incializa pero que se definirá con el valor que devuelva el método

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
//precioventa se crea DENTRO del objeto YA está relleno y se pone : como con las propiedades

console.log(coche);

precioCoche = coche.precioventa(3000);
//aqui llamo a la funcion del metodo y lo que me devuelve lo meto en una variable que he inicializado arriba

console.log(coche.marca, coche.añoMatrícula, coche.color, coche.kilometros, precioCoche);

//

