function sayMyName() {
  console.log("H");
  console.log("I");
}

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersArrow = (num1, num2) => num1 + num2;

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage()); // undefined just logged in
// console.log(loginUserMessage("Shreyas"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500)); // [ 400, 500 ]

const user = {
  username: "Nikola",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

const myNewArr = [200, 400, 100, 700];

function returnSecondVal(getArr) {
  return getArr[2];
}

// console.log(returnSecondVal(myNewArr));
