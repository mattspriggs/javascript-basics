function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');

  function obCallBack(payload) {
    console.log(payload);
  }
  const ob = new IntersectionObserver(obCallBack);
  ob.observe(watch);

  if (!terms) {
    return; //quits the function without item on page
  }

  // terms.addEventListener('scroll', function (e) {
  // console.log(e.currentTarget.scrollTop); No longer used wit the introduction of intersection observer
  //   console.log(e.currentTarget.scrollHeight); No longer used wit the introduction of intersection observer
  // });
}

scrollToAccept();
