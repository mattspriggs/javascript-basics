function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  //Create variable for working with the slider
  let current;
  let prev;
  let next;
  //select elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    //Always use element sibling and element child when looking for an element
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    //strip all classes off of the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      //make a new array of the new values and destructure then over and into the prev, current and next variables
      [prev, current, next] = [
        //get the prev slide - if there is none, get the last slide from the slider to wrap
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        //get the next slide - if there is none, get the first slide from the slider to wrap
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  //When this slider is created, run the start slider function
  startSlider();
  applyClasses();

  //Event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
