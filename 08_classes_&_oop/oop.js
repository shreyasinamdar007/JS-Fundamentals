const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from database");
  },
};

function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(user.username);
console.log(user.getUserDetails());
