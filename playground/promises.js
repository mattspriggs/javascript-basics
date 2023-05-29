function makePizza(toppings) {
  return new Promise(function (resolve, reject) {
    //Wait 1 second for the pizza to cook
    setTimeout(function () {
      //When you are ready you can resolve the promise
      resolve(
        `Here is your pizza 🍕with the toppings of: ${toppings.join(' ')}`
      );
    }, 1000);
    //If something went wrong you can reject the promise
  });
}

const pepperoniPromise = makePizza(['pepperoni']);
const canadianPromise = makePizza(['pepperoni', 'mushrooms', 'onions']);
console.log(pepperoniPromise);
console.log(canadianPromise);
console.log('Starting');
// pepperoniPromise.then(function (pizza) {
//   //To access the info in the promise that is returned
//   console.log('Ahh got it!');
//   console.log(pizza);
// });
// console.log('Finishing');
// canadianPromise.then(function (pizza) {
//   //To access the info in the promise that is returned
//   console.log('Ahh got it!');
//   console.log(pizza);
// });
