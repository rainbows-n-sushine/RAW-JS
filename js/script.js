import { updateCounter } from "./counterLogic.js";

export const counterApp = () => {
  const counter = document.getElementById('counter');
  const plusBtn = document.getElementById('plusBtn');
  const minusBtn = document.getElementById('minusBtn');

  plusBtn.addEventListener('click', () => {
    updateCounter(1, counter, minusBtn, plusBtn);
  });

  minusBtn.addEventListener('click', () => {
    updateCounter(-1, counter, minusBtn, plusBtn);
  });


  updateCounter(0, counter, minusBtn, plusBtn);
};



