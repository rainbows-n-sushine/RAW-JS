//be clickable for both plus button and minus
//change the values of the displayed nuumber accordingly

const counter=document.getElementById('counter')
const plusBtn=document.getElementById('plusBtn')
const minusBtn=document.getElementById('minusBtn')

let count=0;
plusBtn.addEventListener('click',()=>{
    count=count+1;
    counter.innerText=count;
 
})

minusBtn.addEventListener("click",()=>{

    count=count-1;
    counter.innerText=count;

})