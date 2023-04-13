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
