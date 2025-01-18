'use strict';

const secretNummber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNummber;

document.querySelector('.check').addEventListener('click',function(){

   const guess= Number( document.querySelector('.guess').value);

   if(!guess){
    document.querySelector('.message').textContent = 'No Number!';
   }else if(guess === secretNummber ){
    document.querySelector('.message').textContent = 'Correct Number!';
   }else if(guess > secretNummber ){
    document.querySelector('.message').textContent = 'big Number!';
   } else if(guess < secretNummber ){
    document.querySelector('.message').textContent = 'small Number!';
   }else{
    document.querySelector('.message').textContent = 'tray again';
   }
});