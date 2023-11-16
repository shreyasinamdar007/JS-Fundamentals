const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(`Item ${item}`);
// }

// coding.forEach(printMe);

coding.forEach((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});

const myCoding = [
  { languageName: "Javascript", languageFileName: "js" },
  { languageName: "Java", languageFileName: "java" },
  { languageName: "Python", languageFileName: "py" },
];

myCoding.forEach((item, index) => {
  console.log(`${item.languageName} and filename is ${item.languageFileName}`);
});
