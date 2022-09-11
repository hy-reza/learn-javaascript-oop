// there is some way to create a class in javascript 

// 1. Constructor function

const Person = function(firstName, lastName, birthYear){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function (){
  const recentYear = new Date().getFullYear()
  const birthYear = this.birthYear
  console.log({recentYear, birthYear })
  return  recentYear - birthYear
}

const reza = new Person("Handy", "Reza Alfanda", 2001);
console.info(reza.calcAge());
console.log(Person.prototype)

// 2. ES6 Classes
class Cars{
  constructor(brand, year){
    this.brand = brand;
    this.year = year;
  }
}

const honda = new Cars('Honda', '2023');

// 3. Object.create() funcion
const Animal = {life: true, breath: true, eat: true}

const goat = Object.create(Animal)
console.info(goat)

// 4. {} curly brackets
const god = {zeus : "zeus", posaidon: "posaidon", hades: "hades",}
console.info(god)