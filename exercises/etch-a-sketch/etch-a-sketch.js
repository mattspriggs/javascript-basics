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

//Write a handler for the keys

//Clear/shake function

//Listen for arrow keys
