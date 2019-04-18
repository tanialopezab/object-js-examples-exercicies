'use strict';
console.log('hola');

 
const selectElement = document.getElementById('mood');
const buttonElement = document.querySelector('.mood__btn');
const faceElement = document.querySelector('.face');
const backgroundElement = document.querySelector('.body__mood');
let randomNumber = getRandomNumber(100);


function getRandomNumber(max) {       
    return Math.ceil(Math.random() * max);
  }   
 console.log(randomNumber);

function changeBackground (){
    if(randomNumber%2 !== 0){
        backgroundElement.classList.add('orange');
        backgroundElement.classList.remove('yellow');
    } else {
        backgroundElement.classList.remove('orange');
        backgroundElement.classList.add('yellow');
    }
}


function buttonHandlerClick (){
   let moodSelected = selectElement.value;
   faceElement.innerHTML = moodSelected;
   
   randomNumber = getRandomNumber(100);
   console.log(randomNumber);
   changeBackground();

}
buttonElement.addEventListener('click',buttonHandlerClick );
