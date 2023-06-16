const textArea = document.querySelector('#text-area')
const limitWord = document.querySelector('.limit-word')
let body = document.body
let darkMode = document.querySelector('.dark-mode')

textArea.addEventListener('input', ()=>{
    limitWord.innerText = textArea.value.length
})

function mode (){
    // let hasColor = body.classList.contains('darkMode')
    // if(hasColor){
    //     body.classList.remove('darkMode')
    //     darkMode.innerText = 'dark mode'
    // }else{
    //     body.classList.add('darkMode')
    //     darkMode.innerText = 'light mode'
    // }
    body.classList.toggle('darkMode')
    darkMode.innerText === 'dark mode' ? darkMode.innerText = 'light mode' : darkMode.innerText = 'dark mode'
}
darkMode.addEventListener('click', mode)

