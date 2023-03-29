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
