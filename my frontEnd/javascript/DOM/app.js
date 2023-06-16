// When we write our html and view it on the browser, the browser views it as a DOM(document object model)
// To get a visual representation of the DOM, type Dom on the browser and choose any of the images
// The process of reaching and selecting elements is called querrying the DOM(We have different ways of querrying the DOM)
// Js is similar to css
// - select the element or group of elements you want to affect
// - Decide the effect you want to apply to the selection
// - There are different ways to apply the effect
// ==============================
// document.body.style.backgroundColor = 'green';
// document.body.style.Color = 'red'
// document.getElementById('btn').style.color = 'blue';
// document.getElementById('btn').style.backgroundcolor = 'red';
// ==========================
// - Lets assign to a variable if there are multiple things we want to do on an element, to avoid writing document. avoid DRY(don't repeat yourself)
// let btn = document.getElementById('btn').style
// btn.backgroundColor = 'green'
// btn.color = 'red'

// So lets dive into it properly 
// the process of reaching and selecting elements is called querrying the DOM, We have different ways of querrying the DOM, please see below
// =================getElementById('element')==============
// ------- getElementById('element') -- make sure the id matches
// ------ we can assign to a variable or just go straight using document. getElementById continuosly
// ----- let's do basic things, so we understand cause we would go into complex situations which would in turn need the basic things you learnt

// lets select the h1 tag

// document.getElementById('title').style.color = 'yellow';
// document.getElementById('title').style.backgroundcolor = 'blue';

// let heading = document.getElementById('title').style
// heading.color = 'yellow'
// heading.backgroundColor = 'red'

// let btn = document.getElementById('btn').style
// btn.color = 'orange'
// btn.backgroundColor = 'purple'

// ===========getElementByTagName('element')=========
// ------- HTML-Collection = array-like object 
// ------- Index, Lenght properties, but not all array methods would work
// let header = document.getElementsByTagName('h2');
// console.log(header.length);
// header.style.color = 'indigo'
// let newHeader= [...header]
// newHeader.forEach(singleHeader => singleHeader.style.color = 'indigo')

// ===========getElementByClassName('element')=========
// ----- With className, we can select multiple elements, we would get an HTML collection

// ------- Select the elements or group of elements you want
// --------- Decide the effect you want to the selection

// let itemsListed = document.getElementsByClassName('special')
// console.log(itemsListed.length);
// itemsListed.forEach( ss => ss.style.color = 'pink')
// let replicatedItems = [...itemsListed]
// replicatedItems.forEach(xx => xx.style.color = 'red');

// ========querySelector() and querySelectorAll()=======
// querySelector('any css selector') ------- selects single element
// Decide the effect you want to apply to the selection

// let anotherItem = document.querySelector('#title')
// anotherItem.style.color = 'red'

// let singleItems = document.querySelector('.special')
// singleItems.style.color = 'blue'

// querySelectorAll() ------- selects all elements, forEach would work here
// const li = document.querySelectorAll('li')
// li.forEach(singleli => singleli.style.color = 'blue')

// innertext
// let para = document.querySelector('.christy')
// para.innerText += ' and she is a senior dev'

// text content
// let h3 = document.querySelector('h3')
// console.log(h3.innerText);
// console.log(h3.textContent);

// innerHtml
// let html = document.querySelector('.html')
// html.innerHTML = '<h1>we go change am finally</h1>'

// changing attribute
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com')
// link.innerText = 'link to facbook'

// className
// classList
// const first = document.getElementById('first');
// const second = document.getElementById('second')
// const third = document.getElementById('third')
// const classValue = first.className
// console.log(classValue);

// let's check if an element has a class using contains 
// let result = second.classList.contains('colors')
// console.log(result);
// if(result){
//     console.log('it has a class of colors');
// }else{
//     console.log('e nor get am oh!');
// }

//    events 
// select elements
// addEventListener()
// what event, what to do 

let btn = document.querySelector('.btn');
let heading = document.querySelector('h2');

function changeColor(){
    let hasClass = heading.classList.contains('red')
    console.log(hasClass);
    // if(hasClass){
    //     heading.classList.remove('red')}else{
    //         heading.classList.add('red')
    //     }
    hasClass ? heading.classList.remove('red') : heading.classList.add('red')
}
btn.addEventListener('click', changeColor)
// btn.addEventListener('click', changeColor)












