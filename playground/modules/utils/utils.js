const last = 'spriggs'; //scoped to this file or module but can be injected into the below function and will be able
// to be shown outside the module - ie scripts.js

export function returnHi(name) {
  return `hi ${name} ${last}`;
}
