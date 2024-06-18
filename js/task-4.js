'use strict';
const getShippingCost = function (country) {
  let price;
  const validateCountry = country.toLowerCase();
  switch (validateCountry) {
    case 'china':
      price = 100;
      break;
    case 'chile':
      price = 250;
      break;
    case 'australia':
      price = 170;
      break;
    case 'jamaica':
      price = 120;
      break;
    default:
      price = false;
      break;
  }
  const result = price
    ? `Shipping to ${validateCountry} will cost ${price} credits`
    : 'Sorry, there is no delivery to your country';
  return result;
};
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
