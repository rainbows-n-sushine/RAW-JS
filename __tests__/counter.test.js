import { getCount, resetCount } from '../js/script.js';
import { updateCounter } from '../js/counterLogic.js';

describe('Counter logic', () => {
  let counter, plusBtn, minusBtn;

  beforeEach(() => {
 
    resetCount();

    counter = document.createElement('h1');
    plusBtn = document.createElement('button');
    minusBtn = document.createElement('button');
  });

  test('increments counter correctly', () => {
    updateCounter(1, counter, plusBtn, minusBtn);
    expect(counter.innerText).toBe('1');
    expect(getCount()).toBe(1);
  });

  test('disables plusBtn at 10', () => {
    for (let i = 0; i < 10; i++) updateCounter(1, counter, plusBtn, minusBtn);
    expect(counter.innerText).toBe('10');
    expect(plusBtn.disabled).toBe(true);
  });

  test('disables minusBtn at 0', () => {
    updateCounter(0, counter, plusBtn, minusBtn);
    expect(minusBtn.disabled).toBe(true);
  });
});
