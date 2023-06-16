let btn = document.querySelector('.btn');

let getBgrc = ()=>{
    let body = document.body.style
    let colors = ['purple','green','yellow','pink','orange','black','indigo','coral','brown']
    // console.log(colors);
    let random = Math.ceil(Math.random() * colors.length)
    console.log(random);
    body.backgroundColor = colors[random]
}
btn.addEventListener('click',getBgrc)
// setInterval(getBgrc,)










