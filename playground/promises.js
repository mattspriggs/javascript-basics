function makePizza(toppings = []) {
  return new Promise(function (resolve, reject) {
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
