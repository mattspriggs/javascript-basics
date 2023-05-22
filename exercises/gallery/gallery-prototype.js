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

  //Binding methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this); //binds the function to the explicit instance of it
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  //EVENT LISTENERS
  this.images.forEach((image) =>
    image.addEventListener('click', (event) =>
      this.showImage(event.currentTarget)
    )
  );
  //Loop over each image and listen for a keyup with an enter key to open if the user presses it
  this.images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    });
  });
  this.modal.addEventListener('click', this.handleClickOutside);
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
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
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
  this.currentImage = el;
  this.openModal();
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};
Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  //TODO: add event listeners for clicks and keyboards
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};
Gallery.prototype.handleClickOutside = function (event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === 'ArrowRight') return this.showNextImage();
  if (event.key === 'ArrowLeft') return this.showPrevImage();
};

//Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1')); //new keyword returns a new instance of it
const gallery2 = new Gallery(document.querySelector('.gallery2'));
console.log(gallery1, gallery2);
