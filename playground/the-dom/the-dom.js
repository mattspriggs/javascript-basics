//Two main ways to get DOM elements: querySelector() and querySelectorAll()

// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img'); //searching inside the element
// // console.log(p);
// // console.log(divs); //returns a node list (not an array)
// // console.log(imgs);
// // console.log(item2);
// // console.log(item2Image);
//
// const heading = document.querySelector('h2');
// // heading.textContent = 'Matt is cool'; //Setter
// // console.dir(heading.textContent); //getter for everything including style and other elements; will show something is
// // // hidden as well
// // console.dir(heading.innerText); //same as the above but only human-readable
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML); //HTML that fills it
// console.log(heading.outerHTML); //Includes the h2 tag it is within and the inner html
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;//very slow
// pizzaList.insertAdjacentText('beforeend', '🍕'); //better way to add text
// pizzaList.insertAdjacentText('afterbegin', '🍕');

/* CLASSES */
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.add('round');
pic.classList.toggle('round');
console.log(pic.classList);
function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
//use in the console the command pic.classList.contains('round') to know when a class is present on an element
//pic.className will return the class names but classList has other methods you can use, so it's a better choice
//Attributes are anything added to an element that provides additional data such as alt for img tags or class
// attributes for styling and behavior, etc.

pic.alt = 'Cute Pup'; //setter
console.log(pic.alt); //getter
console.log(pic.naturalWidth); //getter only -  need to wait for the image to arrive -  it will run as 0

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth);
});
