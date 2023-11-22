const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curVal) {
//   console.log(`acc: ${acc}, cur:${curVal}`);
//   return acc + curVal;
// }, 0);

const myTotal = myNums.reduce((acc, curVal) => {
  console.log(`acc: ${acc}, cur:${curVal}`);
  return acc + curVal;
}, 0);

const shopppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 5999,
  },
  {
    itemName: "Backend Course",
    price: 4999,
  },
];

const total = shopppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(myTotal);
console.log(total);
