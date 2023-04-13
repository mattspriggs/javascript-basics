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
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
//'keyup'
signupForm.name.addEventListener('keyup', logEvent);
//'keydown'
signupForm.name.addEventListener('keydown', logEvent);
//'focus'
signupForm.name.addEventListener('focus', logEvent); //cursor is in and input
//'blur'
signupForm.name.addEventListener('blur', logEvent); //cursor moves out of the input

//ACCESSIBILITY
//Buttons are to be used for something to work within the application, links are to be used to change the page - do
// not use them to replace each other

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter')
    console.log('You clicked the photo');
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick); //will capture the enter key on the photo
//a photo cannot be focussed on with a keyboard only if it is just added an
// event listener - add a role="button" in HTML to allow it to be selected with a tab key or better just to a
// button,  but if you need to do something in HTML like use a div for a button it should be like the one on the HTML
