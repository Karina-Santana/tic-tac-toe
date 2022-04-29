var player1 = document.querySelector('player-1-name')
var player2 = document.querySelector('player-2-name')
var playerTurn = 'X'

var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')



function checkWinner() {
    if (box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X' || box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X' || box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X') {
        console.log(`${playerTurn} won!`)
    }
}



var parentBox = document.querySelector('.game-section')
function test() {
    parentBox.addEventListener('click', function (event) {
        if (event.target.tagName === 'DIV') {
            checkWinner()
            if (playerTurn === 'X') {
                event.target.textContent = 'X'
                playerTurn = 'O'
            } else {
                event.target.textContent = 'O'
                playerTurn = 'X'
            }
        }
    })
}

test()