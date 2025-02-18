
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
        if(!checkWinner()){
            changePlayer();
        }
    }
}

function  updateCell(cell,index){
    cell.textContent = player;
    inputCells[index] = player;
    cell.style.color = (player =='X') ? ' #1892EA' : '#fff';
   
}

function changePlayer(){
    player =(player == 'X') ? 'O' : 'X';
}
function checkWinner(){
    for(const [a, b, c] of winCondition){
        if(inputCells[a] == player && 
            inputCells[b] == player &&
            inputCells[c] == player
        ){
            declearWinner([a ,b ,c])
            return true;
        }
    }
}

function declearWinner(winningIndices){
    titleHeader.textContent = `${player} win`;
    isPushGame = true;

    //hight light cell

    winningIndices.forEach ((index) =>
        cells[index].style.background = "#2A2343"
    )

    restartBtn.style.visibility= 'visible'
}

restartBtn.addEventListener('click',()=>{
    restartBtn.style.visibility= 'hidden';
    inputCells.fill('');
    cells.forEach(cell =>{
        cell.textContent = '';
        cell.style.background = '';
        isPushGame = false;
        isGameStart = false;
        titleHeader.textContent = 'choose';
    })
})