
const btn = document.querySelector('.btn');

btn.addEventListener('click',() =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

let page = document.querySelector('html');
let button = document.getElementById('darkmode')

button.onclick = function(){
    if (page.classList.contains('dark')){
        page.classList.remove('dark');
        button.innerText = 'Mode sombre';
        button.style.backgroundColor = "dark";
        
        
    }
    else{
        page.classList.add('dark');
        button.innerText = 'Mode clair';  
    }
}
