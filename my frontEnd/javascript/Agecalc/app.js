/'use strict'/;

let add = document.querySelector('.add')
let minus = document.querySelector('.minus')
let mult = document.querySelector('.mult')
let div = document.querySelector('.div')
let reset = document.querySelector('.reset')
let footer = document.querySelector('.footer-date')

add.addEventListener('click', ()=>{
    let result = document.getElementById('result')
    let value1 = Number(document.getElementById('inputValue1').value)
    let value2 = Number(document.getElementById('inputValue2').value)
    let total = value1 + value2
    result.innerText = total
    if(!value1 || ! value2){
      alert('fill input field')
    }
 })

 minus.addEventListener('click', ()=>{
    let result = document.getElementById('result')
    let value1 = Number(document.getElementById('inputValue1').value)
    let value2 = Number(document.getElementById('inputValue2').value)
    let total = value1 - value2
    result.innerText = total
    if(!value1 || ! value2){
      alert('fill input field')
    }
 })

 mult.addEventListener('click', ()=>{
    let result = document.getElementById('result')
    let value1 = Number(document.getElementById('inputValue1').value)
    let value2 = Number(document.getElementById('inputValue2').value)
    let total = value1 * value2
    result.innerText = total
    if(!value1 || ! value2){
      alert('fill input field')
    }
 })

 div.addEventListener('click', ()=>{
    let result = document.getElementById('result')
    let value1 = Number(document.getElementById('inputValue1').value)
    let value2 = Number(document.getElementById('inputValue2').value)
    let total = value1 / value2
    result.innerText = total
    if(!value1 || ! value2){
      alert('fill input field')
    }
 })

reset.addEventListener('click', ()=>{
    window.location.reload()
})

// let change = document.querySelector('.html')
// change.innerHTML = '<footer> <hr> &copy; years henry </footer>'

let year = new Date()
footer.innerHTML = year.getFullYear()







