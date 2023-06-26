import mondo, { returnHi as sayHi, last, middle } from '/utils/utils.js'; //named are imported in curly brackets and can
// only be imported by name while default exports can be named anything - if you import with the as function you can
// rename the named import
//import fubar from '/scripts/wes.js'; //can  be named anything you want, not just person since it is NOT a named
// export but is the only thing exported from the wes.js file
import * as everything from '/scripts/wes.js'; //will bring in everything from the module - can be named anything you
// want,not limited to everything
const name = 'matt';

// console.log(returnHi(name));
console.log(sayHi);
console.log(sayHi(name));
console.log(last, middle);
// console.log(fubar);
console.log(mondo);
console.log(everything);
