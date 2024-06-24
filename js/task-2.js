'use strict';
taskNum++;
console.log(`%c Task ${taskNum} `, style);
const calcAverageCalories = function (days = []) {
  if (!Array.isArray(days))
    throw new Error(`Argument must be array! You provide ${typeof days}`);

  let summ = 0;
  let average = 0;
  if (days.length > 0) {
    for (const key in days) {
      summ += Number.parseInt(days[key].calories);
    }
    return (average = summ / days.length);
  } else {
    return 0;
  }
};
console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: '2610' }, //what is someone setup wrong value??
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
