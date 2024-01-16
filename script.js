// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor to set name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
const person1 = new Person("John", 25);
person1.greet(); // Output: Hello, my name is John, I am 25 years old.

const employee1 = new Employee("Alice", 30, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Alice, I am 30 years old.
employee1.jobGreet(); // Output: Hello, my name is Alice, I am 30 years old, and my job title is Software Engineer.
