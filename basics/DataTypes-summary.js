// Primitive - 7 Types

// 1) String
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined
// 6) Symbol
// 7) BigInt

const score = 100;
const scoreValue = 10.2;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 326651696559552264554n;

// Non-Primitive or Reference Type

// 1) Array
const heroes = ["Shaktiman", "Gogo"];

// 2) Object
const obj = {
  name: "Shreyas",
  age: 23,
};

// 3) Function
function getData() {
  return "Hello World";
}

console.log(typeof bigNumber);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object