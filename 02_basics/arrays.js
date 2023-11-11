// array

const myArr = [0, 1, 2, 3, 4, 5];
const inspirations = ["Nikola Tesla", "Steve Jobs"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.pop();
myArr.unshift(7);
myArr.shift();

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(16)); // -1

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice, splice
// console.log("A ", myArr);

const slicedArr = myArr.slice(1, 3);

console.log(slicedArr); // [1, 2]
console.log("B ", myArr); // [ 0, 1, 2, 3, 4, 5 ]

const splicedArr = myArr.splice(1, 3);
console.log(splicedArr); // [1, 2, 3]
console.log("C ", myArr); // [0, 4, 5]

// In slice array original array remains as it whereas in
// spliced from the original array spliced elements are removed
