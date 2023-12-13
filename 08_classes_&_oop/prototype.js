// let myName = "Nikola"

// console.log(myName.truelength);

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spidermen: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spidermen}`);
  },
};

Object.prototype.nikola = function () {
  console.log(`Nikola is available in all objects`);
};

Array.prototype.heyNikola = function () {
  console.log("Nikola says hello");
};

// heroPower.nikola();
myHeros.nikola();
myHeros.heyNikola();
// heroPower.heyNikola();

//inheritance

const User = {
  name: "chai",
  email: "chai@mail.com",
};

const Teacher = {
  makeVideo: false,
};

const TeachingAssistant = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingAssistant,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingAssistant, Teacher);

console.log(TeachingAssistant.makeVideo);

let anotherUsername = "ChaiAurCode         ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Nikola        ".trueLength();
"Tesla     ".trueLength();
