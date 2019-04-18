'use strict';

// Crear un contador
// Vamos a crear un contador con los datos que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.
// Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el estado actual para ver si funciona correctamente.

const counter = {
    maxValue: 100,
    minValue: 2,
    actualValue: 6,
    initialValue: 0,
    increase: function(){
        counter.actualValue = counter.actualValue +1;
        return counter.actualValue;
    },

    decrease: function(){
        counter.actualValue = counter.actualValue -1;
        return counter.actualValue;
    },

    reset: function(){
        counter.actualValue = counter.initialValue;
        return counter.actualValue;
    },

};

console.log(counter.maxValue);
console.log(counter.minValue);
console.log(counter.actualValue);
console.log(counter.initialValue);

console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.reset());
