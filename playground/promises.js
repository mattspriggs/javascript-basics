async function makePizza() {
  const pizzaPromise = new Promise(function (resolve, reject) {
    //When you are ready you can resolve the promise
    resolve('🍕');
    //If something went wrong you can reject the promise
  });
  return pizzaPromise;
}

const pizza = makePizza();
console.log(pizza);
