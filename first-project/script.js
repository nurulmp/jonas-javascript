'use strict';

const secretNummber = Math.trunc(Math.random()*20) + 1;


let score= 20;
document.querySelector('.check').addEventListener('click',function(){

   const guess= Number( document.querySelector('.guess').value);

   if(!guess){
    document.querySelector('.message').textContent = 'No Number!';
    ////when players win
   }else if(guess === secretNummber ){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNummber;
    document.querySelector('body').style.backgroundColor='green';
    //when guess to high
   }else if(guess > secretNummber ){
      if(score > 1){
         document.querySelector('.message').textContent = 'big Number!';
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent = 'Your lost the game';
         document.querySelector('.score').textContent = 0;
      }
      //when guess to low
   } else if(guess < secretNummber ){
      if(score > 1){
      document.querySelector('.message').textContent = 'small Number!';
      score--;
      document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent = 'Your lost the game';
         document.querySelector('.score').textContent = 0;
      }
   }else{
    document.querySelector('.message').textContent = 'tray again';
   }
});