let burger=document.querySelector('.burger img')
let navtog=document.querySelector('.nav-toggle')
burger.addEventListener('click',(e)=>{
    
    if(navtog.classList.contains('hidden')){
        burger.setAttribute('src','./images/icon-close.svg')
        navtog.classList.remove('hidden')
    }else{
        burger.setAttribute('src','./images/icon-hamburger.svg')
        navtog.classList.add('hidden')
    }
})