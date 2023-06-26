const last = 'spriggs'; //scoped to this file or module but can be injected into the below function and will be able
// to be shown outside the module - ie scripts.js but only available in this file
//export const last = 'spriggs'; //will allow it to be available outside the module
const middle = 'crowell';
export function returnHi(name) {
  return `hi ${name} ${last}`;
}
//NAMED EXPORTS -  can have as many as you want
export { last, middle };
const first = 'Matthew';
export default first; //can have a default export in addition to named exports
