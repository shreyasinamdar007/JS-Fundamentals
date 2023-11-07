// {
//     // scope
// }

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("inner A", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Nikola";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "Nikola";
  if (username === "Nikola") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}


addTwo(5);
const addTwo = function (num) {
  return num + 2;
};

