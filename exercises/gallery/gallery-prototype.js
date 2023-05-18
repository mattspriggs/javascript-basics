function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  //Select images for the gallery in question
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal'); //Using document because it can be shared since there can only be
  // one modal open at a time
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');
    //Check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }
    modal.classList.add('open');

    //EVENT LISTENERS TO BE BOUND TO THE MODAL
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }
  function showImage(el) {
    if (!el) {
      console.info('No image to show');
      return;
    }
    //Update the modal with the image that is passed in
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  function closeModal() {
    modal.classList.remove('open');
    //TODO: add event listeners for clicks and keyboards
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }
  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  //EVENT LISTENERS
  images.forEach((image) =>
    image.addEventListener('click', (event) => showImage(event.currentTarget))
  );
  //Loop over each image and listen for a keyup with an enter key to open if the user presses it
  images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });
  modal.addEventListener('click', handleClickOutside);
}

//Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
