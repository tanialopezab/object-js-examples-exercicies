'use strict';

///OBJET 1

const memberClub = {
    name:"Maria",
    surname: "Pérez",
    age: 29,
    sport: "pádel",
    memberGold: true,
}

//OBJET 2

const highlighter = {
    color: "green",
    point: "thick",
    material: "plastic",
    brand: "stabilo",
    cost: 2+"€",
}
///Object 3
const rolePlayer = {
    name: "Mystic",
    race: "elfic",
    weapon: "arch",
    life: 2000,
    attack: 200,
    velocity: 600,
    rate: 90,

}

//Muestra por consola las propiedades del objeto 1 objeto 2 objeto 3

console.log(memberClub.name, memberClub.surname, memberClub.age, memberClub.sport, memberClub.memberGold);

console.log(highlighter.color, highlighter.point, highlighter.material,highlighter.brand, highlighter.cost);

console.log(rolePlayer.name, rolePlayer.race, rolePlayer.weapon, rolePlayer.life, rolePlayer.life, rolePlayer.attack, rolePlayer.velocity, rolePlayer.rate);


//Muestra por consola las propiedaddes del objeto 1 objeto 2 con la segunda forma
console.log(memberClub['name'], memberClub['surname'], memberClub['age'], memberClub['sport'], memberClub['memberGold']);

console.log(highlighter['color'], highlighter['point'], highlighter['material'],highlighter['brand'], highlighter['cost']);
