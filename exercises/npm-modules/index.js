import wait from 'waait';
import { name } from 'faker';
import { formatDistance, formatDistanceToNow, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';

console.log(`Hey ${name.firstName()}`);

const fakeNames = Array.from({ length: 10 }, () => {
  return `${name.firstName()} ${name.lastName()}`;
});
console.log(fakeNames);

async function go() {
  console.log('Going!');
  await wait(2000);
  console.log('ending...');
}

go();

const diff = formatDistance(
  new Date(1986, 3, 4, 11, 32, 0),
  new Date(1986, 3, 4, 10, 32, 0),
  { addSuffix: true }
);

const diff2 = formatDistance(new Date(), new Date(2024, 3, 4, 10, 32, 0), {
  addSuffix: true,
});

const diff3 = formatDistanceToNow(new Date(2025, 0, 1, 0, 0, 15), {
  includeSeconds: true,
});

const date = new Date();
//In format of day, month, year

const formatted = format(date, `do 'of' LLLL',' y`);
console.log(diff);
console.log(diff2);
console.log(diff3);
console.log(formatted);

async function getJoke() {
  const { data: joke } = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(joke);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [2, 4, 6, 8, 10, 12, 14, 16];

const sameValue = intersection(a, b);
console.log(sameValue);

const person1 = { name: 'wes' };
const person2 = { name: 'wes' };

console.log(person1 === person2); //cannot determine if the object data is the same, instead will look to see if theyu
// are the same object which they are not
console.log(isEqual(person1, person2)); //lodash allows you to see if the two objects are the same
