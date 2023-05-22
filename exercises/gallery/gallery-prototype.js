function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  this.gallery = gallery;
  //Select images for the gallery in question
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal'); //Using document because it can be shared since there can only be
  // one modal open at a time
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  //EVENT LISTENERS
  this.images.forEach((image) =>
    image.addEventListener('click', (event) => showImage(event.currentTarget))
  );
  //Loop over each image and listen for a keyup with an enter key to open if the user presses it
  this.images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });
  this.modal.addEventListener('click', handleClickOutside);
}

Gallery.prototype.openModal = function () {
  console.info('Opening Modal...');
  //Check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Modal already open');
    return;
  }
  this.modal.classList.add('open');

  //EVENT LISTENERS TO BE BOUND TO THE MODAL
  window.addEventListener('keyup', handleKeyUp);
  this.nextButton.addEventListener('click', showNextImage);
  this.prevButton.addEventListener('click', showPrevImage);
};
Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('No image to show');
    return;
  }
  //Update the modal with the image that is passed in
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  currentImage = el;
  openModal();
};

Gallery.prototype.showNextImage = function () {
  showImage(currentImage.nextElementSibling || gallery.firstElementChild);
};
Gallery.prototype.showPrevImage = function () {
  showImage(currentImage.previousElementSibling || gallery.lastElementChild);
};
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  //TODO: add event listeners for clicks and keyboards
  window.removeEventListener('keyup', handleKeyUp);
  this.nextButton.removeEventListener('click', showNextImage);
  this.prevButton.removeEventListener('click', showPrevImage);
};
Gallery.prototype.handleClickOutside = function (event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === 'Escape') return closeModal();
  if (event.key === 'ArrowRight') return showNextImage();
  if (event.key === 'ArrowLeft') return showPrevImage();
};

//Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1')); //new keyword returns a new instance of it
const gallery2 = new Gallery(document.querySelector('.gallery2'));
console.log(gallery1, gallery2);
