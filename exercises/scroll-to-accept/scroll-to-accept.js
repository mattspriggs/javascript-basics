function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  // const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');

  function obCallBack(payload) {
    // console.log(payload[0].isIntersecting);
    // console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
  // const ob = new IntersectionObserver(obCallBack);
  const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
  });
  // ob.observe(watch);
  ob.observe(terms);

  if (!terms) {
    return; //quits the function without item on page
  }
  ob.observe(terms.lastElementChild);
  // terms.addEventListener('scroll', function (e) {
  // console.log(e.currentTarget.scrollTop); No longer used wit the introduction of intersection observer
  //   console.log(e.currentTarget.scrollHeight); No longer used wit the introduction of intersection observer
  // });
}

scrollToAccept();
