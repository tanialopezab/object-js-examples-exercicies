'use strict';
console.log('hola');

const adalaber1 = {};

adalaber1.name = "Susana";
adalaber1.age = 34 + " años";
adalaber1.job = "periodista";
adalaber1.showBio = function(){
    return console.log(`Mi nombre es ${this.name} tengo ${this.age} y trabajo de ${this.job}`);
}

const adalaber2 = {};

adalaber2.name = "Rocío";
adalaber2.age = 25 + " años";
adalaber2.job = "actriz";
adalaber2.showBio = function(){
    return console.log(`Mi nombre es ${this.name} tengo ${this.age} y trabajo de ${this.job}`);
}

adalaber1.showBio();
adalaber2.showBio();