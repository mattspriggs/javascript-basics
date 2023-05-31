function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function go() {
  console.log('starting');
  await wait(2000);
  console.log('ending');
}
go();

//function declaration
async function fd() {}
//Arrow functions
const arrowFn = async () => {};
//callback function
window.addEventListener('click', async function () {});

//object methods
const person = {
  // method
  sayHi: async function () {},
  // method shorthand
  async sayHello() {},
  //function property
  sayHey: async () => {},
};

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

async function makeDinner() {
  const pizza1 = await makePizza(['pepperoni']);
  const pizza2 = await makePizza(['pepperoni', 'mushrooms']);
  console.log(pizza1);
  console.log(pizza2);
  const pizzaPromise1 = makePizza(['pepperoni']);
  const pizzaPromise2 = makePizza(['pepperoni', 'mushrooms']);
  const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(pep, mush);
}
makeDinner();
