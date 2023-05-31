function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
        `Here is your pizza 🍕 with the toppings of: ${toppings.join(' ')}`
      );
    }, amountOfTimeToBake);
    //If something went wrong you can reject the promise
  });
}

async function go() {
  try {
    //One method to resolve errors
    const pizza = await makePizza(['pineapple']);
  } catch (err) {
    console.log('Oh noooooo!');
    console.log(err);
  }
}

function handleError(err) {
  console.log('Oh noooooo!');
  console.log(err);
}
async function go2() {
  //One method to resolve errors
  const pizza = await makePizza(['pineapple']).catch(handleError);
  console.log(pizza);
}

async function go3() {
  //async functions will always return a promise so you can chain with .then, .catch
  //One method to resolve errors
  const pizza = await makePizza(['pineapple']);
  console.log(pizza);
}

go();
go2();
go3().catch(handleError);
go3()
  .then((result) => {
    console.log(result);
  })
  .catch(handleError);

async function goGo() {
  const result = await go(); //nesting of promises
}
//catch it at run time
goGo().catch(handleError);

//higher order function

//make a safe function with a higher order function
function makeSafe(funct, errorHandler) {
  //pass in the original function and the error handler
  return function () {
    funct().catch(errorHandler);
  };
}
go(); //Unsafe function

const safeGo = makeSafe(go, handleError); //pass in the original function and the error handler
safeGo();
