//Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; //this is to note that it is a true constant in all caps and underscores
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
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //Starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//Write the draw function
function draw({ key }) {
  //Increment the hue by 1 each time this runs and update the stroke style
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //grabs the property from the options object as a variable through destructuring
  console.log(key);
  //start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //move the x and y depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x = x + MOVE_AMOUNT;
      break;
    default:
      break;
  }
  // x = x - MOVE_AMOUNT; //same as x -= 10
  // y = y - MOVE_AMOUNT; //same as y -= 10
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
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      //remove the shake class when the animation ends so it can be
      // run again by adding the class that will run the CSS animation of shaking
      canvas.classList.remove('shake');
    },
    { once: true }
  ); //this option will remove the listener after it is done, otherwise it will add it multiple times
}
//Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
