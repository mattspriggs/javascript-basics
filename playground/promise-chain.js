//Single threaded language so only one thing can happen at a time
// console.log('Starting');
// setTimeout(function () {
//   console.log('Running...');
// }, 0); //Will run the callback in 2 seconds - output is Starting/Ending/Running due to async
// console.log('Ending');
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

wait(2000).then(() => console.log('Done'));
const go = document.querySelector('.go');

async function animate2(e) {
  const el = e.currentTarget;
  //Change the text to GO when clicked
  el.innerText = 'GO';
  //Make it a circle after 2 seconds
  await wait(2000);
  el.classList.add('circle');
  await wait(500); //Make it red after .5 seconds
  el.classList.add('red');
  await wait(250); //make it square after .25 seconds
  el.classList.remove('circle');
  el.classList.add('square');
  await wait(300); //make it purple after .3 seconds
  el.classList.remove('red');
  el.classList.add('purple');
  await wait(500); //fade out after .5 seconds
  el.classList.add('fade');
}

function animate(e) {
  const el = e.currentTarget;
  //Change the text to GO when clicked
  el.innerText = 'GO';
  //Make it a circle after 2 seconds
  wait(2000)
    .then(() => {
      el.classList.add('circle');
      return wait(500); //Make it red after .5 seconds
    })
    .then(() => {
      el.classList.add('red');
      return wait(250); //make it square after .25 seconds
    })
    .then(() => {
      el.classList.remove('circle');
      el.classList.add('square');
      return wait(300); //make it purple after .3 seconds
    })
    .then(() => {
      el.classList.remove('red');
      el.classList.add('purple');
      return wait(500); //fade out after .5 seconds
    })
    .then(() => {
      el.classList.add('fade');
    });
}

go.addEventListener('click', animate2);

go.addEventListener('clickxxx', function (e) {
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
