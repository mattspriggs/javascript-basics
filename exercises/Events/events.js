const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
//butts.addEventListener('eventType', callBackFunction) - callback function is one that is called when an event
// occurs - it is a function that is called when it is passed to a method like eventListeners

function handleClick() {
  console.log('🪲 it got clicked');
}
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);
// BINDING
//Taking a function and listening for a specific event - it is "bound" to the event
//UNBINDING
// Removing the function from the event - it will no longer fire when the event occurs

// butts.addEventListener('click', function () {
//   console.log('it got clicked');
// });
//CALLBACK FUNCTIONS
//Three-step process:
// butts - GO GET SOMETHING -.addEventListener  ('click' - LISTEN FOR SOMETHING - , function () {
// 	console.log('it got clicked') - DO SOMETHING_;
// });
