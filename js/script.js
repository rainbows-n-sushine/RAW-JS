//be clickable for both plus button and minus
//change the values of the displayed nuumber accordingly
import {updateCounter} from "./counterLogic.js";

const counter=document.getElementById('counter')
const plusBtn=document.getElementById('plusBtn')
const minusBtn=document.getElementById('minusBtn')

let count=0;

plusBtn.addEventListener('click',()=>{
    count++;
    updateCounter(count,counter,minusBtn,plusBtn);

})

minusBtn.addEventListener("click",()=>{
    count--;
updateCounter(count,counter,minusBtn,plusBtn);
    

})

export const getCount=()=>count;
export const setCount=()=>count=0;