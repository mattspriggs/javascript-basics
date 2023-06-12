function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove(); //if you do not set the element to null it remains in javascript memory and could be a potential
  // memory leak
  popup = null;
}

function ask(options) {
  return new Promise(async function (resolve) {
    //first create the pop-up with all the fields
    const popup = document.createElement('form'); //allows you to add event listeners within the function
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
                <label>${options.title}</label>
                <input type="text" name="input"/>
                <button type="submit">Submit</button>
            </fieldset>`
    );

    //check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      //TODO:listen for a click on the button
      skipButton.addEventListener(
        'click',
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    //listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        //remove the event listener from the DOM
        destroyPopup(popup);
      },
      { once: true } //option to remove the event listener after it has run once
    );
    //when submitted, resolve the data in the input
    //insert popup to the DOM
    document.body.appendChild(popup);
    //to get the animation to work you have to add a small timeout before you add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

//select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset; //button.hasAttribute('data-cancel') to detect, in is also available
  const answer = await ask({
    title: button.dataset.question,
    cancel: cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

//Will ask all the questions at once and will fire in order and overlay each other so last appears first
// const answers = Promise.all([
//   ask(questions[0]),
//   ask(questions[1]),
//   ask(questions[2]),
// ]).then((answers) => {
//   console.log(answers);
// });

//Using map will work but still does not work with animations
// Promise.all(questions.map(ask)).then((data) => {
//   console.log(data);
// });

// questions.forEach(async function (question) {
//   console.log('Asking a question');
//   console.log(question);
//   const answer = await ask(question);
//   console.log(answer);
// });

async function asyncMap(array, callback) {
  //make an array to store our results
  const results = [];
  for (const item of array) {
    // const result = await callback(item);
    // results.push(result);
    results.push(await callback(item));
  }
  //when done return the results
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
// async function askMany() {
//   //the for of loop will work with async to run sequentially - will pause the loop
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }
//
// askMany();
