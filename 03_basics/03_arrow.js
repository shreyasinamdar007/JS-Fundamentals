const user = {
  username: "Nikola",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },

  // this refers to the current context.
};

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()
// console.log(this); // {}

// function chai() {
//   let username = "Tesla";
//   console.log(this.username);
// }

// chai();

// const chaiCoffee = function () {
//     let username = "Tesla"
//     console.log(this.username);
// }

// chaiCoffee()

const chaiBeer = () => {
  let username = "Tesla";
  console.log(this);
};

chaiBeer();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ({ username: "Tesla" }) // returning the object

console.log(addTwo(3, 4));
