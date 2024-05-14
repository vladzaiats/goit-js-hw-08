'use strict';
const getShippingMessage = function (country, price, deliveryFee) {
  const a = Number.parseInt(price);
  const b = Number.parseInt(deliveryFee);
  const totalPrice = a + b;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
};
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
