function isEnoughCapacity(products, containerSize) {
let totalProducts = 0;
for (let product in products) {
  totalProducts += products[product];
}
return totalProducts <= containerSize;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false






























/*function slugify(title) {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"*/





















/*function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = (quantity * pricePerDroid);
  let message;
  if (totalPrice>customerCredits) {
    message = "Insufficient funds!" ;
  }
  else {
    message = `You ordered ${quantity} droids worth ${
      totalPrice } credits!`;
  }
return message;
  }

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"*/

