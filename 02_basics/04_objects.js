const bumbleUser = {};

bumbleUser.id = "123abc";
bumbleUser.name = "Dan Bilzerian";
bumbleUser.isLoggedIn = false;

// console.log(bumbleUser);

const regularUser = {
  email: "some@email.com",
  fullname: {
    userfullname: {
      firstname: "Nikola",
      lastname: "Tesla",
    },
  },
};

// console.log(regularUser.fullname)

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 };
const obj5 = Object.assign({}, obj1, obj2);

console.log(obj3);
console.log(obj4);
console.log(obj5);

console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));

console.log(bumbleUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "JS in hindi",
  price: 999,
  courseteacher: "Hitesh",
};

const { courseteacher: instructor, coursename } = course;

console.log(instructor);
console.log(coursename);
