let count = 0;

export const getCount = () => count;
export const resetCount = () => {
  count = 0;
};

export const updateCounter = (change, counter, minusBtn, plusBtn) => {
  count += change;
  if (count < 0) count = 0;
  if (count > 10) count = 10;

  counter.innerText = String(count);

  plusBtn.disabled = count >= 10;
  minusBtn.disabled = count <= 0;
};
