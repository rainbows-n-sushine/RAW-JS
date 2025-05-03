//be clickable for both plus button and minus
//change the values of the displayed nuumber accordingly

const counter=document.getElementById('counter')
const plusBtn=document.getElementById('plusBtn')
const minusBtn=document.getElementById('minusBtn')

let count=0;
const  updateCounter=(value)=>{
    count=count+value;
    counter.innerText=count

    if(count>=10){
        plusBtn.setAttribute('disabled',true);

    }else{
        plusBtn.removeAttribute('disabled',false);
    }

    if(count<=0){
        minusBtn.setAttribute('disabled',true)
    }else{
        minusBtn.removeAttribute('disabled',false)
    }

}
plusBtn.addEventListener('click',()=>{
    updateCounter(1);

})

minusBtn.addEventListener("click",()=>{
updateCounter(-1);
    

})