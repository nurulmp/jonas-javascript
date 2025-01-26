'use strict'

let secretNummber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = "No Number!";
    }else if (guess === secretNummber){
        document.querySelector('.message').textContent = "woow correct Number!";
    } else if (guess > secretNummber){
        document.querySelector('.message').textContent = "biggest Number!";
    } else if (guess < secretNummber){
        document.querySelector('.message').textContent = "lowest Number!";
    } 
})