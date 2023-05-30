function makePizza(toppings = []) {
  return new Promise(function (resolve, reject) {
    //Reject if a pizza includes pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously? Get OUT! 🍍');
    }

    const amountOfTimeToBake = 500 + toppings.length * 250;
    //Wait 1 second for the pizza to cook
    setTimeout(function () {
      //When you are ready you can resolve the promise
      resolve(
        `Here is your pizza 🍕with the toppings of: ${toppings.join(' ')}`
      );
    }, amountOfTimeToBake);
    //If something went wrong you can reject the promise
  });
}

// const pepperoniPromise = makePizza(['pepperoni']);
// const canadianPromise = makePizza(['pepperoni', 'mushrooms', 'onions']);
// console.log(pepperoniPromise);
// console.log(canadianPromise);
// console.log('Starting');
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
makePizza(['pepperoni'])
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(['hot pepper', 'onion', 'feta']);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza();
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza([
      'hot pepper',
      'onion',
      'feta',
      'ham',
      'cheese',
      'pepperoni',
    ]);
  })
  .then((pizza) => {
    console.log('All done! Here is your last pizza -');
    console.log(pizza);
  });
//Rune them concurrently
const pizzaPromise1 = makePizza(['hot pepper', 'onion', 'feta']);
const pizzaPromise2 = makePizza([
  'hot pepper',
  'onion',
  'feta',
  'ham',
  'cheese',
  'pepperoni',
]);
const pizzaPromise3 = makePizza(['ham', 'cheese']);
const dinnerPromise = Promise.all([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);
dinnerPromise.then((pizzas) => {
  console.log(pizzas);
});
const dinnerPromise1 = Promise.all([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);
dinnerPromise1.then(function (pizzas) {
  const [hottie, garbagePail, hamCheese] = pizzas;
  console.log(hottie, garbagePail, hamCheese);
});
const firstPizzaPromise = Promise.race([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);
firstPizzaPromise.then((pizza) => {
  //gives the first one that finishes
  console.log('You must be hungry, here is your first pizza');
  console.log(pizza);
});

makePizza(['cheese', 'pineapple'])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((err) => {
    console.log('Oh no!!!');
    console.log(err);
  });
