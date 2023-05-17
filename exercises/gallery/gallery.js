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
    console.log(currentImage.nextElementSibling);
  }
  function closeModal() {
    modal.classList.remove('open');
    //TODO: add event listeners for clicks and keyboards
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
  }
  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') closeModal();
  }

  //EVENT LISTENERS
  images.forEach((image) =>
    image.addEventListener('click', (event) => showImage(event.currentTarget))
  );
  modal.addEventListener('click', handleClickOutside);
}

//Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
