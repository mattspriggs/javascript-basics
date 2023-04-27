const age = 50;
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
  } else {
    return sentence.replace(/\s/g, '-');
  }
}
