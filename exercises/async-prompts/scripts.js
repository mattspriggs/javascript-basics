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
