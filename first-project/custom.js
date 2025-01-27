'use strict';

let secretNummber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === secretNummber) {
    displayMessage('woow correct Number!');
    document.querySelector('.number').textContent = secretNummber;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNummber) {
    if (score > 1) {
      displayMessage(
        guess > secretNummber ? 'biggest Number' : 'lowest Number'
      );

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
    }
  }
  //   } else if (guess > secretNummber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'biggest Number!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   } else if (guess < secretNummber) {
  //     document.querySelector('.message').textContent = 'lowest Number!';
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
  else {
    displayMessage('try again');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNummber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing..';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
