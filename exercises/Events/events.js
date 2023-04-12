const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
const another = document.querySelector('.another');
//butts.addEventListener('eventType', callBackFunction) - callback function is one that is called when an event
// occurs - it is a function that is called when it is passed to a method like eventListeners

function handleClick() {
  console.log('🪲 it got clicked');
}

const hooray = () => console.log('HOORAY!');
butts.addEventListener('click', handleClick);
//Can be unbound since it is stored in a named variable despite being an
// arrow function
cool.addEventListener('click', hooray);
//Rather than using function keyword for an
// anonymous function you can use an arrow function
another.addEventListener('click', () => console.log('Clicked Another'));
// cool.removeEventListener('click', hooray);
// butts.removeEventListener('click', handleClick); //Has to have reference to the event, function.
// For anonymous functions you cannot unbind it as you do not have a name to reference to remove the callback

// BINDING
//Taking a function and listening for a specific event - it is "bound" to the event

//UNBINDING
// Removing the function from the event - it will no longer fire when the event occurs

//CALLBACK FUNCTIONS
// butts.addEventListener('click', function () {
//   console.log('it got clicked');
// });

//Three-step process:
// butts - GO GET SOMETHING -.addEventListener  ('click' - LISTEN FOR SOMETHING - , function () {
// 	console.log('it got clicked') - DO SOMETHING_;
// });

//LISTENING TO EVENTS ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons); //Need to add event listener to the Node List using forEach
// function handleBuy() {
//   console.log('Clicked Buy Button');
// }
//
// function attachListener(anyThingWeWant) {
//   anyThingWeWant.addEventListener('click', handleBuy);
// }
//BETTER FACTOR
// buyButtons.forEach((button) => button.addEventListener('click', handleBuy)); - But cannot be unbound

//Wes' example
// buyButtons.forEach(function(buyButton) {
// button.addEventListener('click', handleBuy)
// }); - can also remove in a loop to remove all

// buyButtons.forEach(attachListener);

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
} //Adding data to the button and accessing the value and parse the info to a float to preserve decimals

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

//THE EVENT OBJECT
