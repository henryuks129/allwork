'use strict'

// let dice1 = document.querySelector('.king')
let dice1 = document.querySelectorAll('img')[0]
let randomNumber = Math.ceil(Math.random() * 6)
let randomImage = 'dice' + randomNumber + '.jpeg'
let randomImageSrc = 'assets/' + randomImage

// let dice2 = document.querySelector('.queen')
let dice2 = document.querySelectorAll('img')[1]
let randomNumber2 = Math.ceil(Math.random() * 6)
let randomImage2 = 'dice' + randomNumber2 + '.jpeg'
let randomImageSrc2 = 'assets/' + randomImage2

 let button = document.querySelector('#reset')
let result = document.querySelector('.text-center')
// let no1 = 'assets/dice1.jpeg'
// let no2 = 'assets/dice2.jpeg'
// let no3 = 'assets/dice3.jpeg'
// let no4 = 'assets/dice4.jpeg'
// let no5 = 'assets/dice5.jpeg'
// let no6 = 'assets/dice6.jpeg'

// player1
dice1.setAttribute('src',randomImageSrc)
// dice1.addEventListener('click', ()=>{
    //     // let allDice1 = Number([no2,no3,no4,no5,no6].value)
    // let random1 = Math.ceil(Math.random() * allDice1)
    //     console.log(random1);
    // })
    
    // Player2
    dice2.setAttribute('src',randomImageSrc2)

    button.addEventListener('click', ()=>{
        window.location.reload()
    })

            if(randomImageSrc > randomImageSrc2){
            result.innerText = 'player1 wins'
        }else if(randomImageSrc2 > randomImageSrc){
            result.innerText = 'player2 wins'
        }else if(randomImageSrc === randomImageSrc2) {
        result.innerText = 'its a tie'
        }


    // dice2.addEventListener('click', ()=>{
        //     // let allDice2 = Number([no1,no3,no4,no5,no6].value)
        //     let random2 = Math.ceil(Math.random() * allDice2)
        //     console.log(random2);
        // })
        // let singleD1  
        // let allDice1 = ['assets/dice1.jpeg','assets/dice2.jpeg','assets/dice3.jpeg','assets/dice4.jpeg','assets/dice5.jpeg','assets/dice6.jpeg']
        // let allDice2 = ['assets/dice1.jpeg','assets/dice2.jpeg','assets/dice3.jpeg','assets/dice4.jpeg','assets/dice5.jpeg','assets/dice6.jpeg']
        // let random1 = Math.ceil(Math.random() * allDice1.length)
        // console.log(random1);
        // let random2 = Math.ceil(Math.random() * allDice2.length)

        
        // dice1.setAttribute('src', allDice1[random1])
        
        // dice2.setAttribute('src', allDice2[random2])
        
     
        

