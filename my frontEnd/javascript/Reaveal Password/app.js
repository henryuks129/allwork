let img = document.querySelector('#show');
let password = document.querySelector('#password')
let close = './asset/visibility_off_FILL0_wght400_GRAD0_opsz48.svg'
let open = './asset/asset.svg'

function reveal(){
    if(password.type === 'password'){
        password.type = 'text'
        img.setAttribute('src',open)
    }else{
        password.type = 'password'
        img.setAttribute('src',close)
    }
}
img.addEventListener('click', reveal)
