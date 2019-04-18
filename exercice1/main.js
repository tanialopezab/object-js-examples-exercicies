'use strict';

// Bio de Adalabers
// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz

//creo un objeto vacío
const adalaber1 = {};

//introduzco las propiedades,

adalaber1.name = "Susana";
adalaber1.age = 34 + " years";
adalaber1.job = "journalist";

//selecciono el elemento html y lo guardo en una constante

const paragraphElement = document.querySelector('.info');

paragraphElement.innerHTML = `This is our first Adalaber. Her name is ${adalaber1.name} , she is ${adalaber1.age} old and she is a ${adalaber1.job}`;

//creo el objeto vacío Adalaber2

const adalaber2 = {};
//introduzco sus propiedades:

adalaber2.name = "Rocío";
adalaber2.age = 25 + " years";
adalaber2.job = "actress";

const paragraphElement2 = document.querySelector('.info2');

paragraphElement2.innerHTML = `This is ${adalaber2.name} , she is and adalaber. She is ${adalaber2.age} old and she works as an ${adalaber2.job} . `;




