const marvel_heroes = ["thor", "IronMan", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const allHeroes1 = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes1);

const anotherArray = [1, 2, 3, 4, [6, 7, 8, [1, 2, 3]]];

const usableArr = anotherArray.flat(Infinity);

console.log(usableArr);

console.log(Array.isArray("Tesla"));
console.log(Array.from("Tesla"));
console.log(Array.from({ name: "Tesla" })); // interesting []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
