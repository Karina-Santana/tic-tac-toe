var player1 = document.querySelector('.player-1-name')
var player2 = document.querySelector('.player-2-name')
var playerTurn = 'X'
var counter = 0

var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')


var parentWinner = document.querySelector('.winner');
var playerWinner = document.createElement('h3');
parentWinner.appendChild(playerWinner);

//INPUTS AND SAVE BUTTONS:

var savBtn1 = document.querySelector('.save-1')  //button
var secWinner = document.querySelector('.winner') // parent
var savBtn2 = document.querySelector('.save-2') //button

var player1Name = document.querySelector('.title-player-1') // Player1: title
var player2Name = document.querySelector('.title-player-2') // Player1: title

savBtn1.addEventListener('click', function (event) {
    event.preventDefault();
    player1Name.textContent = player1.value
    player1.value = ''
    player1.placeholder = 'Change your name here'
})


savBtn2.addEventListener('click', function (event) {
    event.preventDefault();
    player2Name.textContent = player2.value
    player2.value = ''
    player2.placeholder = 'Change your name here'
})


function checkWinner() {
    for (let i = 0; i < boxDivs.length; i++) {
        if (box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X' || box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X' || box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X') {
            playerWinner.textContent = "The winner is " + player1Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X' || box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X' || box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X') {
            playerWinner.textContent = "The winner is " + player1Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X' || box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X') {
            playerWinner.textContent = "The winner is " + player1Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O' || box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O' || box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O') {
            playerWinner.textContent = "The winner is " + player2Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O' || box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O' || box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O') {
            playerWinner.textContent = "The winner is " + player2Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O' || box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O') {
            playerWinner.textContent = "The winner is " + player2Name.textContent + " 🏆"
            boxDivs[i].style.pointerEvents = "none";
        } else if (counter === 9) {
            playerWinner.textContent = "That's a draw!"
            boxDivs[i].style.pointerEvents = "none";
        }
    }
}




//switch between players

var parentBox = document.querySelector('.game-section')
function turn() {
    parentBox.addEventListener('click', function (event) {
        counter++
        if (event.target.tagName === 'DIV') {
            console.log('player turn is ' + playerTurn)
            if (playerTurn === 'X') {
                event.target.textContent = 'X'
                event.target.style.backgroundColor = '#B5D35B'
                playerTurn = 'O'
            } else {
                event.target.textContent = 'O'
                event.target.style.backgroundColor = '#F0BE2C'
                playerTurn = 'X'
            }
            checkWinner()

        }
    })
}

turn()


//NOT ALLOW TO CLICK TWICE IN THE SAME BOX:

var boxDivs = document.querySelectorAll('div');

for (let i = 0; i < boxDivs.length; i++) {
    boxDivs[i].addEventListener('click', function (event) {
        boxDivs[i].style.pointerEvents = "none";
        if (boxDivs[i].textContent === 'X' || boxDivs[i].textContent === 'O') {
            console.log(`You can not click here!`)
        }
    })
}




//para o botao reset, usar isso para deixar as divs clicaveis de novo:  .style.pointerEvents = 'auto';

var resetBtn = document.querySelector('.play-again')

for (let i = 0; i < boxDivs.length; i++) {
    resetBtn.addEventListener('click', function (event) {
        boxDivs[i].textContent = "";
        boxDivs[i].style.backgroundColor = 'white';
        boxDivs[i].style.pointerEvents = 'auto';
        playerTurn = 'X';
        counter = 0;
        playerWinner.textContent = ""
    })
}



//como deixar a posicao da secao winer permanente
//como alterar a fonte dos x e o
