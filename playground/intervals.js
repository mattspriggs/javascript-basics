function buzzer() {
  console.log('ERRRNNGGGHH!');
}

setTimeout(function () {
  console.log('Done');
}, 500); //globally scoped method

console.log('Starting');
// setTimeout(buzzer, 500); //demonstrates the asynchronous nature of JavaScript as a callback at alter time
console.log('Finishing');

// setInterval(buzzer, 2000); //Will not run until the first time period has run and will not be invoked immediately

function setImmediateInterval(funcToRun, ms) {
  //right away run that function
  funcToRun();
  //run a regular interval
  return setInterval(funcToRun, ms);
}
// setImmediateInterval(buzzer, 2000);
function destroy() {
  document.body.innerHTML = `<p>DESTROYED</p>`;
}
const bombTimer = setTimeout(destroy, 5000);

window.addEventListener('click', function () {
  console.log('You clicked! You saved the world');
  clearTimeout(bombTimer); //stops the timer
});

const poopInterval = setInterval(function () {
  console.log('💩');
  console.log('Hehehe');
}, 100);

setTimeout(function () {
  clearInterval(poopInterval);
}, 500);
