//Single threaded language so only one thing can happen at a time
// console.log('Starting');
// setTimeout(function () {
//   console.log('Running...');
// }, 0); //Will run the callback in 2 seconds - output is Starting/Ending/Running due to async
// console.log('Ending');

const go = document.querySelector('.go');

go.addEventListener('click', function (e) {
  const el = e.currentTarget;
  console.log(el);
  //Change the text to GO when clicked
  el.innerText = 'GO';
  //Make it a circle after 2 seconds
  setTimeout(function () {
    el.classList.add('circle');
    //Make it red after .5 seconds
    setTimeout(function () {
      el.classList.add('red');
      //make it square after .25 seconds
      setTimeout(function () {
        el.classList.remove('circle');
        el.classList.add('square');
        //make it purple after .3 seconds
        setTimeout(function () {
          el.classList.remove('red');
          el.classList.add('purple');
          //fade out after .5 seconds
          setTimeout(function () {
            el.classList.add('fade');
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});

//Finish
