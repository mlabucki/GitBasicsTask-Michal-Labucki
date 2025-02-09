function User(username, name, surname, password) {
  (this.username = username),
    (this.name = name),
    (this.surname = surname),
    (this.password = password);
  this.sayName = function () {
    console.log(this.name);
  };
  this.info = function () {
    console.log(
      `${this.username} is restricted for ${this.name} ${this.surname}`
    );
  };
}

const user1 = new User("j_caan", "James", "Caan", "soonyPass");
const user2 = new User("m_brando", "Marlon", "Brando", "GodFatherPass");

user1.sayName();
user1.info();

user2.sayName();
user2.info();

const proto1 = Object.getPrototypeOf(user1) === User.prototype;
const proto2 = Object.getPrototypeOf(user2) === User.prototype;

console.log(proto1.valueOf());
