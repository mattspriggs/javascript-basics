//PREVENT DEFAULT
const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  // event.preventDefault();
  console.log('YOU CLICKED IT!');
  const shouldChangePage = confirm(
    'This wesite might be malicious, do you wish to proceed?'
  );
  // if (shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }
  if (!shouldChangePage) {
    event.preventDefault();
  }
  //prevents redirecting to the URL in the link - use in setting of console Preserve Log to
  // keep access to the log if it gets lost due to the refresh, such as going to another website
});

const signupForm = document.querySelector('[name="signup"]'); //Use name='["attribute"]' to select by things that are
// attributes such as name

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // event.currentTarget.querySelector('[name="email"]')- only needed if you are not giving it a name and id
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    //use RegEx for insensitive to case
    alert('Sorry Bro');
    event.preventDefault();
  }
});

//COMMON EVENTS
//'keyup'
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);

//'keydown'
signupForm.name.addEventListener('keydown', logEvent);
//'focus'
signupForm.name.addEventListener('focus', logEvent); //cursor is in and input
//'blur'
signupForm.name.addEventListener('blur', logEvent); //cursor moves out of the input
