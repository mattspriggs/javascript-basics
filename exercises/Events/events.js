const butts = document.querySelector('.butts');

//butts.addEventListener('eventType', callBackFunction) - callback function is one that is called when an event
// occurs - it is a function that is called when it is passed to a method like eventListeners

function handleClick() {
  console.log('it got clicked');
}
butts.addEventListener('click', handleClick);
// butts.addEventListener('click', function () {
//   console.log('it got clicked');
// });
//Three-step process:
// butts - GO GET SOMETHING -.addEventListener  ('click' - LISTEN FOR SOMETHING - , function () {
// 	console.log('it got clicked') - DO SOMETHING_;
// });
