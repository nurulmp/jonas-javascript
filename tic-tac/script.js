
const cells = document.querySelector('.cell');
const titleHeader = document.querySelector('#titleHeader');
const oPlayerDisplay = document.querySelector('#oPlayerDisplay');
const xPlayerDisplay = document.querySelector('#xPlayerDisplay');


let player= 'X';
let isPushGame = false;
let isGameStart = false;

const inputCells = ['','','','','','','','',''];

const winCondition =[[0,1,2],[3,4,5],[6,7,8],]