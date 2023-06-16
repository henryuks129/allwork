let mainHome = document.querySelector('.race')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')

let mainGuest = document.querySelector('.race2')
let fourth = document.querySelector('.fourth')
let fifth = document.querySelector('.fifth')
let sixth = document.querySelector('.sixth')

let game = document.querySelector('.play')
let score = 0;
let score1 = 0;

function scoreBoard1(){
    score++
    mainHome.innerText = score
}
first.addEventListener('click', scoreBoard1)

function scoreBoard2(){
     score+=2
    mainHome.innerText = score
}
second.addEventListener('click', scoreBoard2)

function scoreBoard3(){
    score+=3
   mainHome.innerText = score
}
third.addEventListener('click', scoreBoard3)

function scoreBoard4(){
    score1++
   mainGuest.innerText = score1
}
fourth.addEventListener('click', scoreBoard4)

function scoreBoard5(){
    score1+=2
   mainGuest.innerText = score1
}
fifth.addEventListener('click', scoreBoard5)

function scoreBoard6(){
    score1+=3
   mainGuest.innerText = score1
}
sixth.addEventListener('click', scoreBoard6)

// function gameOver(){
//     score = 0
//     score1 = 0
//     mainHome.innerText = score
//     mainGuest.innerText = score1
// }
// game.addEventListener('click', gameOver)

function gameOver(){
    window.location.reload()
}
game.addEventListener('click', gameOver)










