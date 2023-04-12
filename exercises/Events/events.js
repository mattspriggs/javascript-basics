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
  console.log('You clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget); // They are the same unless it is nested in which case the
  // target is the nested item but the currentTarget is the object whole that is clicked - better to use currentTarget
  // Stop PROPAGATION - bubbling up
  // event.stopPropagation();
} //Adding data to the button and accessing the value and parse the info to a float to preserve decimals

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    //   Capture phase happens on the way down you can stop using a 3rd parameter of and option
    console.log('You clicked the window!');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles); //Boolean about if it will propagate or not
    // event.stopPropagation(); //Will get only the capture on the window
  },
  { capture: true }
); //Overlaps and both will fire via propagation - the event bubbles up - strong tag, button, html
// tag, body,
// window, etc. as it moves up

//THE EVENT OBJECT
//The event object contains a lot of information about the event that has happened
//The event target is of most use; you can get teh data from the target including the location and the text content
