const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}

const tap = new Map();
tap.set("IN", "India");
tap.set("USA", "United States of America");
tap.set("DE", "Germany");

for (const key in tap) {
  console.log(key);
}
