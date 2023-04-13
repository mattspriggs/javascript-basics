//Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
//Setup canvas for drawing
// const width = canvas.width;//destructured is const {width} = canvas
// const height = canvas.height;//destructured is const {height} = canvas
//Make variables called height and width from the same properties on our canvas object
const { width, height } = canvas;

//Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width); //Random x start on the canvas
let y = Math.floor(Math.random() * height); //Random y start on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //Starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//Write the draw function
function draw({ key }) {
  //grabs the property from the options object as a variable through destructuring
  console.log(key);
  //start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //move the x and y depending on what the user did
  x = x - 10; //same as x -= 10
  y = y - 10; //same as y -= 10
  ctx.lineTo(x, y);
  ctx.stroke();
}
//Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); //Prevents the up and down arrows from scrolling the page
    draw({ key: e.key });
  }
}
//Clear/shake function

//Listen for arrow keys
window.addEventListener('keydown', handleKey);
