import { returnHi, last, middle } from '/utils/utils.js';
import fubar from '/scripts/wes.js'; //can  be named anything you want, not just person since it is NOT a named
// export but is the only thing exported from the wes.js file
const name = 'matt';

console.log(returnHi(name));
console.log(last, middle);
console.log(fubar);
