function Manager(nama) {
  this.name = nama;
}

function Employee(nama) {
  this.name = nama;
}

Employee.prototype.sayHi = (name) => {
  console.log(`Hi ${name}, my name is ${this.name} i am an employee`);
};
Manager.prototype.sayHi = (name) => {
  console.log(`Hi ${name}, my name is ${this.name} i am an manager`);
};

Employee.prototype = Object.create(Manager.prototype);

const ahyar = new Manager("ahyar");
ahyar.sayHi("reza");
const reza = new Employee("reza");
reza.sayHi("ahyar");


