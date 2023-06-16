// let h2 = document.querySelector('h2')
// h2.innerText = 'henry'

//  document.body.style.backgroundColor = 'green'

let heading = document.querySelector('h2');
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let headingTag = 0

// decraese
function decrease (){
    headingTag--
    heading.innerText = headingTag
    // document.body.style.backgroundColor = 'green'
    if(headingTag > 0){
      document.body.style.backgroundColor = 'green'
    }else if(headingTag < 0){
      document.body.style.backgroundColor = 'red'
    } else{
      document.body.style.backgroundColor = 'yellow'
    }
}

dec.addEventListener('click', decrease)

function increase(){
    headingTag++
    heading.innerText = headingTag
    // document.body.style.backgroundColor = 'red'
    if(headingTag > 0){
      document.body.style.backgroundColor = 'red'  
    }else if(headingTag < 0){
      document.body.style.backgroundColor = 'green'
    }else{
      document.body.style.backgroundColor = 'yellow'
    }
}
inc.addEventListener('click', increase)

function reset(){
  headingTag = 0
  heading.innerText = headingTag
  // document.body.style.backgroundColor = 'yellow'
  if(headingTag >= 0){
    document.body.style.backgroundColor = 'yellow'
  }else if(headingTag < 0){
    document.body.style.backgroundColor = 'red'
  }else{
    document.body.style.backgroundColor = 'green'
  }
}

res.addEventListener('click', reset)

























