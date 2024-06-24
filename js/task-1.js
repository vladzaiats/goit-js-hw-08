'use strict';
let taskNum = 1;
const style = 'background: rgba(0, 255, 0, 0.5); color: #333; font-size:18px;';
console.log(`%c Task ${taskNum} `, style);

const isEnoughCapacity = function (products = 0, containerSize = 0) {
  if (typeof products !== 'object')
    throw new Error('1st argument must be object!');
  if (containerSize < 1)
    throw new Error("2nd argument 'Container Size' can't be less that 1");
  let summ = 0;
  for (const key in products) {
    summ += products[key];
  }
  return summ <= containerSize;
};
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
