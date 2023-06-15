let myNumber = 2
let box1 = 0
let box2 = 0
let box3 = 0
let box4 = 0
let box5 = 0
let box6 = 0
let box7 = 0
let box8 = 0
let box9 = 0
let draw = 0
let scoreX = 0 + window.localStorage.getItem('scoreX')
let scoreO = 0 + window.localStorage.getItem('scoreO')
let scoreDraw = 0 + window.localStorage.getItem('scoreDraw')
let winsP1 = 0 + window.localStorage.getItem('player1')
let winsP2 = 0 + window.localStorage.getItem('player2')

function startGame() {
    document.querySelector('.box1').innerHTML = ' '
    document.querySelector('.box2').innerHTML = ' '
    document.querySelector('.box3').innerHTML = ' '
    document.querySelector('.box4').innerHTML = ' '
    document.querySelector('.box5').innerHTML = ' '
    document.querySelector('.box6').innerHTML = ' '
    document.querySelector('.box7').innerHTML = ' '
    document.querySelector('.box8').innerHTML = ' '
    document.querySelector('.box9').innerHTML = ' '
    box1 = 0
    box2 = 0
    box3 = 0
    box4 = 0
    box5 = 0
    box6 = 0
    box7 = 0
    box8 = 0
    box9 = 0
    draw = 0
    myNumber = Math.floor(Math.random() * 2)
    document.querySelector('.wrapper4').innerHTML = 'Tic Tac Toe'
    document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
    document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
    document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
    document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
    document.querySelector('.wrapper3 .p3').innerHTML = 'Draws: '
    document.querySelector('.wrapper3 .p3').innerHTML += window.localStorage.getItem('scoreDraw')
    document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
    document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
    document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    let user1 = prompt('Enter the name of player 1', 'player 1')
    let user2 = prompt('Enter the name of Player 2', 'player 2')
    document.querySelector('.username1').innerHTML = user1
    document.querySelector('.username2').innerHTML = user2
    if (myNumber == 0) {
        document.querySelector('.Turn').innerHTML = 'Turn: ' + user1
    } else if (myNumber == 1 ) {
        document.querySelector('.Turn').innerHTML = 'Turn: ' + user2
    }
}

function myFunction10() {
    if (box1 == 1 && box2 == 1 && box3 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box1 == 1 && box5 == 1 && box9 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box1 == 1 && box4 == 1 && box7 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box2 == 1 && box5 == 1 && box8 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box3 == 1 && box5 == 1 && box7 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box3 == 1 && box6 == 1 && box9 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box4 == 1 && box5 == 1 && box6 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box7 == 1 && box8 == 1 && box9 == 1) {
        document.querySelector('.wrapper4').innerHTML = 'X won the game'
        myNumber = 2
        scoreX = parseInt(scoreX) + 1
        window.localStorage.setItem('scoreX', scoreX)
        document.querySelector('.wrapper3 .p1').innerHTML = 'Wins X: '
        document.querySelector('.wrapper3 .p1').innerHTML += window.localStorage.getItem('scoreX')
        winsP1 = parseInt(winsP1) + 1
        window.localStorage.setItem('player1', winsP1)
        document.querySelector('.wrapper3 .p4').innerHTML = 'Wins Player 1: '
        document.querySelector('.wrapper3 .p4').innerHTML += window.localStorage.getItem('player1')
    } else if (box1 == 2 && box2 == 2 && box3 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box1 == 2 && box5 == 2 && box9 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box1 == 2 && box4 == 2 && box7 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box2 == 2 && box5 == 2 && box8 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box3 == 2 && box5 == 2 && box7 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box3 == 2 && box6 == 2 && box9 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box4 == 2 && box5 == 2 && box6 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (box7 == 2 && box8 == 2 && box9 == 2) {
        document.querySelector('.wrapper4').innerHTML = 'O won the game'
        myNumber = 2
        scoreO = parseInt(scoreO) + 1
        window.localStorage.setItem('scoreO', scoreO)
        document.querySelector('.wrapper3 .p2').innerHTML = 'Wins O: '
        document.querySelector('.wrapper3 .p2').innerHTML += window.localStorage.getItem('scoreO')
        winsP2 = parseInt(winsP2) + 1
        window.localStorage.setItem('player2', winsP2)
        document.querySelector('.wrapper3 .p5').innerHTML = 'Wins Player 2: '
        document.querySelector('.wrapper3 .p5').innerHTML += window.localStorage.getItem('player2')
    } else if (draw == 9) {
        document.querySelector('.wrapper4').innerHTML = 'Its a draw'
        scoreDraw = parseInt(scoreDraw) + 1
        window.localStorage.setItem('scoreDraw', scoreDraw)
        document.querySelector('.wrapper3 .p3').innerHTML = 'Draws: '
        document.querySelector('.wrapper3 .p3').innerHTML += window.localStorage.getItem('scoreDraw')
    }
    
}

function myFunction1() {
    if (document.querySelector('.box1').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box1').innerHTML += 'X'
        myNumber = myNumber + 1
        box1 = box1 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box1').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box1').innerHTML += 'O'
        myNumber = myNumber - 1
        box1 = box1 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction2() {
    if (document.querySelector('.box2').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box2').innerHTML += 'X'
        myNumber = myNumber + 1
        box2 = box2 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box2').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box2').innerHTML += 'O'
        myNumber = myNumber - 1
        box2 = box2 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction3() {
    if (document.querySelector('.box3').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box3').innerHTML += 'X'
        myNumber = myNumber + 1
        box3 = box3 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box3').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box3').innerHTML += 'O'
        myNumber = myNumber - 1
        box3 = box3 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction4() {
    if (document.querySelector('.box4').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box4').innerHTML += 'X'
        myNumber = myNumber + 1
        box4 = box4 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box4').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box4').innerHTML += 'O'
        myNumber = myNumber - 1
        box4 = box4 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction5() {
    if (document.querySelector('.box5').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box5').innerHTML += 'X'
        myNumber = myNumber + 1
        box5 = box5 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box5').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box5').innerHTML += 'O'
        myNumber = myNumber - 1
        box5 = box5 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction6() {
    if (document.querySelector('.box6').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box6').innerHTML += 'X'
        myNumber = myNumber + 1
        box6 = box6 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box6').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box6').innerHTML += 'O'
        myNumber = myNumber - 1
        box6 = box6 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction7() {
    if (document.querySelector('.box7').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box7').innerHTML += 'X'
        myNumber = myNumber + 1
        box7 = box7 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box7').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box7').innerHTML += 'O'
        myNumber = myNumber - 1
        box7 = box7 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction8() {
    if (document.querySelector('.box8').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box8').innerHTML += 'X'
        myNumber = myNumber + 1
        box8 = box8 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box8').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box8').innerHTML += 'O'
        myNumber = myNumber - 1
        box8 = box8 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}

function myFunction9() {
    if (document.querySelector('.box9').innerHTML == ' ' && myNumber == 0) {
        document.querySelector('.box9').innerHTML += 'X'
        myNumber = myNumber + 1
        box9 = box9 + 1
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username2').textContent
        myFunction10()
    } else if (document.querySelector('.box9').innerHTML == ' ' && myNumber == 1) {
        document.querySelector('.box9').innerHTML += 'O'
        myNumber = myNumber - 1
        box9 = box9 + 2
        draw = draw + 1
        document.querySelector('.Turn').innerHTML = 'Turn: ' + document.querySelector('.username1').textContent
        myFunction10()
    }
}