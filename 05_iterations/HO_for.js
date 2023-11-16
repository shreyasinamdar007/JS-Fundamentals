const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "Hello World!";
// for (const greet of greetings) {
//   console.log(`Each char ${greet}`);
// }

const tap = new Map();
tap.set("IN", "India");
tap.set("USA", "United States of America");
tap.set("DE", "Germany");

console.log(tap);

for (const key of tap) {
  console.log(key);
}

for (const [key, value] of tap) {
  console.log(key, value);
}

let myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const value of myObj) {
  console.log(value);
}
