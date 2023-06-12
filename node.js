// const decre=document.querySelector('.decre')
// const incre=document.querySelector('.incre')
const num=document.querySelector('.num')



// decre.addEventListener('click',decrease)
// incre.addEventListener('click',increase)
function decrease(){
    let value=parseInt(num.innerText)
    value--
    num.innerText=value
}
function increase(){
    let value=parseInt(num.innerText)
    value++
    num.innerText=value
}