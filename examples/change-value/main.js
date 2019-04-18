'use strict';

// Modifica las propiedades del personaje de role a estas :

// name kuna, race human, weapon sword life 600 attack 900 velocity 200 rate 150

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


console.log(rolePlayer.name, rolePlayer.race, rolePlayer.weapon, rolePlayer.life, rolePlayer.life, rolePlayer.attack, rolePlayer.velocity, rolePlayer.rate);

rolePlayer.name = "Kuna";
rolePlayer.race = "human";
rolePlayer.weapon = "sword";
rolePlayer.life = "600";
rolePlayer.attack="900";
rolePlayer.velocity ="200";
rolePlayer.rate="150";

console.log(rolePlayer.name, rolePlayer.race, rolePlayer.weapon, rolePlayer.life, rolePlayer.life, rolePlayer.attack, rolePlayer.velocity, rolePlayer.rate);

