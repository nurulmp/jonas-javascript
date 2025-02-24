'use strict';

//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// switch player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    if (playing) {
        //generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //check for rolled 1 if true , switch to new player

        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //switch player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        //add current score to active players score
        scores[activePlayer] += currentScore;
        //scores[1] = score[1]+currenScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


        //check if players score is >= 100
        //finish the game
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        } else {
            //switch to the next player
            switchPlayer();
        }
    }
})