function Person(name, surname) {
  (this.name = name), (this.surname = surname);
}

Person.prototype.sayName = function () {
  console.log(`Person name is ${this.name}`);
};

function User(username, password, name, surname) {
  Person.call(this, name, surname),
    (this.username = username),
    (this.password = password);
}

User.prototype = {};

Object.setPrototypeOf(User.prototype, Person.prototype);

User.prototype.constructor = User;

User.prototype.info = function () {
  console.log(
    `${this.username} is restricted for ${this.name} ${this.surname}`
  );
};

function Producer(name, surname, accessToParamount) {
  User.call(this, `${name}_admin`, "producerPass", name, surname);
  this.accessToParamount = accessToParamount;
}

Producer.prototype = {};

Object.setPrototypeOf(Producer.prototype, User.prototype);

Producer.prototype.constructor = Producer;

Producer.prototype.info = function () {
  console.log(`${this.accessToParamount} is for ${this.name} ${this.surname}`);
};

const user4 = new User("m_brando", "godfatherPass", "Marlon", "Brando");

const producer = new Producer("Albert", "Ruddy", "AccessToParamount");

user4.sayName();
user4.info();
producer.info();
