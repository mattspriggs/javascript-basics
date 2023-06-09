function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  //select elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  //When this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  //Event listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move()); //or () => this.move() instead of this.move.bind(this)
}

Slider.prototype.startSlider = function () {
  //Always use element sibling and element child when looking for an element
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  //strip all classes off of the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    //make a new array of the new values and destructure then over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      //get the prev slide, there is none, get the last slide from the slider to wrap
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      //get the next slide - if there is none, get the first slide from the slider to wrap
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
