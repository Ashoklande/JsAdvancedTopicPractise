function Person(name) {
  this.firstname = name;
}

Person.prototype.sayhello = function () {
  console.log(`Hello I am ${this.firstname}`);
  return;
};

const user = new Person("Ashok");
console.log(user.__proto__ === Person.prototype);
