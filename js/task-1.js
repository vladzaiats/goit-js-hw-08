'use strict';
const slugify = function (text = 'string') {
  if (typeof text === 'string') {
    const lower = text.toLowerCase();
    const arr = lower.split(' ');
    const slug = arr.join('-');
    return slug;
  } else {
    console.log('Wrong type of argument');
    return;
  }
};
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
