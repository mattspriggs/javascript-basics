These are the notes from the course that don't fit into comments easily:

SNOB 'N' US - object types:
String - words,
Number - numbers,
Object,
Boolean - true or false,
Null - contains nothing,
Undefined - Not set to a value,
Symbol - gives a unique identifier

NUMBERS

Numbers will convert from a string if you are subtracting,multiplying or dividing but not addition since it will, by 
default, concatenate the string.

MATH FUNCTIONS - HELPER METHODS
Math contains many helper functions such as:
Math.round(value) - rounds the number
Math.floor(value) - gives the lower value of the number
Math.ceil(value) - gives you the upper value
Math.random() - gives you a random number between 0 and 1

Going to window.location = `https://${0.1+0.2}.com`; via console will open a page explaining math with a base of 10, 
uses a prime base of 2 and 5 - and binary base with only a prime base of 2, which explains why in JavaScript 0.1 + 
  0.2 != 0.3
Never store prices in dollars and cents, always provide in ONLY cents so you are always using whole numbers.  
  Computers ONLY UNDERSTAND WHOLE NUMBERS

** is the symbol for power of

Computers also have Infinity and -Infinity when the number becomes too large for it to work with.

NaN is 'Not a Number' and appears when doing an operation with a non-numeric type

FUNCTIONS
Built in functions
Functions take in data, known as arguments that are "passed in"

Math.max(10, 12) returns 12 - 10 and 12 are arguments that are passed the Math.max() method or statement. Multiple 
arguments are 
seperated by a comma ,

parseFloat('20.3456789') will convert the string as a floating number (decimal)

parseInt('20.3456789') will return from the string a whole number of 20

Date.now() will return the number in milliseconds and https://epoch.vercel.app/ is a good tool for conversion to 
various formats

FUNCTIONS
window.scrollTo( x, y) to move to specific coordinates on a page or

window.scrollTo({
top: 110, left: 0, behavior:'smooth'}
) will move to the location set in the object that is passed to it.

Parameters are placeholders, arguments are data 0- actual values - passed to the placeholder in the function
