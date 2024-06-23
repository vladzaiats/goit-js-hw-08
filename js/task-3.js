'use strict';
const filterArray = function (numbers = [], value = 0) {
  if (typeof numbers === 'object') {
    let arr = [];
    arr = numbers.filter(number => number > value);
    return arr;
  } else {
    console.error('ERROR: Wrong parameters type');
    return;
  }
};
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
