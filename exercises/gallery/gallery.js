function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  //Select images for the gallery in question
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal'); //Using document because it can be shared since there can only be
  // one modal open at a time
}

//Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
