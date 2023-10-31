let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// ***** to Number *****
// "33" =>  33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

// ***** to Boolean *****
// 1 => true; 0 => false
// "hitesh" => true

// ********************************** Operations **********************************

let value = 3;
let negValue = value;

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(((3 + 4) * 5) % 3);
console.log(+true);
console.log(+"");
