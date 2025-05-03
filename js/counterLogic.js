export const updateCounter=(count,counter,minusBtn,plusBtn)=>{
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
