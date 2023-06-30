import wait from 'waait';
import faker from 'faker';
console.log(`Hey ${faker.name.firstName()}`);
async function go() {
  console.log('Going!');
  await wait(200);
  console.log('ending...');
}

go();
