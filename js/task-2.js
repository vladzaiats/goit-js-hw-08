'use strict';
const makeArray = function (firstArray = [], secondArray = [], maxLength = 0) {
  let a, b, c;
  a = typeof firstArray === 'object';
  b = typeof secondArray === 'object';
  c = typeof maxLength === 'number';
  if (a && b && c) {
    const arr = [].concat(firstArray, secondArray).slice(0, maxLength);
    return arr;
  } else {
    console.error('ERROR: Wrong parameters type');
    return;
  }
};
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
console.log(makeArray('Earth, Jupiter', ['Neptune', 'Uranus', 'Venus'], 0)); // ERROR: Wrong parameters type
