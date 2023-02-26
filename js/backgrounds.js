document.body.style.backgroundImage = "url('imagens/gif01.gif')"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundRepeat = "no-repeat"

let perfil = document.querySelector('#perfil')
perfil.style.backgroundImage = "url('imagens/ssolutek.png')"

let bot1 = document.querySelector('#bot1')
let link1 = document.querySelector('#link1')
bot1.addEventListener('mouseenter', entrar1 =>{
    link1.style.color = 'white'
    link1.style.transition = '0.5s';
})

bot1.addEventListener('mouseout', sair1 =>{
    link1.style.color = '#990000'
})

let bot2 = document.querySelector('#bot2')
let link2 = document.querySelector('#link2')
bot2.addEventListener('mouseenter', entrar2 =>{
    link2.style.color = 'white'
    link2.style.transition = '0.5s';
})
bot2.addEventListener('mouseout', sair2 =>{
    link2.style.color = '#990000'
})

let bot3 = document.querySelector('#bot3')
let link3 = document.querySelector('#link3')
bot3.addEventListener('mouseenter', entrar3 =>{
    link3.style.color = 'white'
    link3.style.transition = '0.5s';
})
bot3.addEventListener('mouseout', sair3 =>{
    link3.style.color = '#990000'
})

let bot4 = document.querySelector('#bot4')
let link4 = document.querySelector('#link4')
bot4.addEventListener('mouseenter', entrar4 =>{
    link4.style.color = 'white'
    link4.style.transition = '0.5s';
})
bot4.addEventListener('mouseout', sair4 =>{
    link4.style.color = '#990000'
})



