function Actor(name, surname) {
  (this.name = name), (this.surname = surname);
}

function User(username, password, name, surname) {
  Actor.call(this, name, surname),
    (this.username = username),
    (this.password = password);
}

User.prototype = Object.create(Actor.prototype);
User.prototype.constructor = User;

Actor.prototype.sayName = function () {
  console.log(this.name);
};

User.prototype.info = function () {
  console.log(
    `${this.username} is restricted for ${this.name} ${this.surname}`
  );
};

Object.getPrototypeOf(User.prototype);

Object.setPrototypeOf(User.prototype, Actor.prototype);

const user1 = new User("j_caan", "soonyPass", "James", "Caan");
const user2 = new User("m_brando", "GodFatherPass", "Marlon", "Brando");
const actor1 = new Actor("Al", "Pacino");
const actor2 = new Actor("Robert", "De Niro");

const actorProto = Object.getPrototypeOf(actor1);
const userProto = Object.getPrototypeOf(user1);
console.log(actorProto);
console.log(userProto);
user1.sayName();
user2.info();
