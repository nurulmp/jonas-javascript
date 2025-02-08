
const cells = document.querySelectorAll('.cell');
const titleHeader = document.querySelector('#titleHeader');
const oPlayerDisplay = document.querySelector('#oPlayerDisplay');
const xPlayerDisplay = document.querySelector('#xPlayerDisplay');


let player= 'X';
let isPushGame = false;
let isGameStart = false;

const inputCells = ['','','','','','','','',''];

const winCondition =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach((cell,index) => {
    cell.addEventListener('click',() => tapCell(cell,index))
});

function tapCell(cell,index){
    if(cell.textContent == '' && !isPushGame){
        isGameStart = true;
        updateCell(cell,index)
    }
}

function  updateCell(cell,index){
    cell.textContent = player;
    inputCells[index] = player
    console.log(inputCells);
}