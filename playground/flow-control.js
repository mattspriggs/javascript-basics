const age = 50;
const sentence = 'I am very cool';
if (age >= 70) {
  console.log('In your seventies');
} else if (age >= 60) {
  console.log('In your sixties');
} else if (age >= 50) {
  console.log('In your fifties');
} else {
  console.log('Nothing is true');
}

if (10 > 2) {
  console.log('Yes'); //will stop evaluating at the first true if statement
} else if (11 > 10) {
  console.log('Yes');
}

function slugify(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  } //else {
  return sentence.replace(/\s/g, '-'); //else can be assumed
  //}
}
//OR
function slugify2(sentence, lowercase) {
  let slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    slug = slug.toLowerCase();
  }
  return slug;
}

slugify(sentence, true);
slugify2(sentence, true);

const name = 'Matt';
const last = 'Spriggs';
if (name === 'Matt' || name === 'Sarah') {
  console.log('Cool name');
}

if (name === 'Matt' && last === 'Spriggs') {
  console.log('Nerdy gamer dude!');
}

if (name === 'Sarah' || (name === 'Matt' && last === 'Spriggs')) {
  console.log('Great ex-pat couple in New Zealand, land of the Kiwis');
}
