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

Going to window.location = `https://${0.1+0.2}.com`; via console will open a page explaining math with a base of 10 
- uses a prime base of 2 and 5 - and binary base with only a prime base of 2, which explains why in JavaScript 0.1 + 
  0.2 != 0.3
Never store prices in dollars and cents, always provide in ONLY cents so you are always using whole numbers.  
  Computers ONLY UNDERSTAND WHOLE NUMBERS