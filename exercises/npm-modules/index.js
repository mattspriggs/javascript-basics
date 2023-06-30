import wait from 'waait';
import { name } from 'faker';
console.log(`Hey ${name.firstName()}`);

const fakeNames = Array.from({ length: 10 }, () => {
  return `${name.firstName()} ${name.lastName()}`;
});
console.log(fakeNames);

async function go() {
  console.log('Going!');
  await wait(200);
  console.log('ending...');
}

go();
