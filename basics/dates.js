// Dates

let myDate = new Date(); // Date is always object
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let createdDate = new Date(2023, 0, 23);

let formattedDate = new Date("2023-01-14");

console.log(createdDate.toDateString());
console.log(formattedDate.toLocaleString());

let timeStamp = Date.now();

console.log(timeStamp);
