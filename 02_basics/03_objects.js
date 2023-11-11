// singleton
// Object.create

// objet literals
const mySym = Symbol("key1");

const JSUser = {
  name: "Tesla",
  age: 25,
  "full name": "Nikola Tesla",
  [mySym]: "mykey1",
  location: "Austria",
  email: "ntesla@tesla.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(JSUser.email);
// console.log(JSUser["location"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

// JSUser.email = 'nikoaltesla@tesla.com'
// Object.freeze(JSUser);
// JSUser.email = 'ntesla@tesla.com';

console.log(JSUser);

JSUser.greetings = function () {
  console.log("Hello World");
};

JSUser.greetingsTwo = function () {
  console.log(`Hello ${this.name}`);
};

console.log(JSUser.greetings());
console.log(JSUser.greetingsTwo());

