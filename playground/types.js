//Can use '', "" or `` for strings

const name = 'Matt';
const middle = 'Crowell';
const last = `Spriggs`;
const sentence = "She's so cool"; //Double quotes
const sentence2 = "She's so cool"; //The backslash will escape the character to allow it to be used
const sentence3 = 'She\'s so "cool"';
const sentence4 = `She's so \\"cool"\\`; //Backticks allow for all forms of punctuation, but a backslash still has to be
// escaped

const song =
  'Ohhh \
\
ya \
\
she is so fine!'; //Multi-line string

const song2 = `Ohhh 
  
  ya 
  
  she is so fine!`; //Multi-line string with backticks will preserve the returns

const html = `
<div>
	<h2>Title</h2>
</div>`; //Backticks make inserting HTML much easier as it preserves the return and tabbing

console.log(html);
