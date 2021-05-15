let faker = require('faker');
email1 = faker.internet.email();
date1 = faker.date.past();
city1 = faker.address.city();
console.log(email1);
console.log(date1);
console.log(city1);