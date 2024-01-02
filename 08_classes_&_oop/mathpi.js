const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
console.log("descriptor", descriptor);

const newObj = {
  name: "Ginger",
  price: "250",
  isAvailable: true,
  orderChai: function () {
    console.log("chai nahi bani");
  },
};

console.log("newObj", newObj);
console.log(Object.getOwnPropertyDescriptor(newObj, "name"));
Object.defineProperty(newObj, "name", {
  //   writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

for (let [key, value] of Object.entries(newObj)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
