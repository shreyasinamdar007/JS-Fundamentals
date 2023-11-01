const name = "Shreyas";
const repo = 50;

console.log(`${name} ${repo} value`);

const gameName = new String("SHHSHH-HS");

console.log(gameName[0].__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("H"));

const nStr = gameName.substring(0, 4); // we cannot give negative values in substring
console.log(nStr);

const anStr = gameName.slice(-8, 4); // in slice method we can give both negative and positive values
console.log(anStr);

const newStr = "    sdwadw  "; // it trims whitespaces and line terminators also /n
console.log(newStr.trim());

const url = "Nikola Tesla";
console.log(url.replace(" ", "_"));
console.log(url.includes("Tesla"));

console.log(gameName.split("-"));
