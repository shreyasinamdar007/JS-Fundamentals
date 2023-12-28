class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static ceateId() {
    return `1234`;
  }
}

const Tesla = new User("hitesh");


class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "email@iphone.com");
iphone.logMe()
