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
