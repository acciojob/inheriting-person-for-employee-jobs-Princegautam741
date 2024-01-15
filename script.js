// Create a constructor function called Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype called greet()
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Create a constructor function called Employee
function Employee(name, age, jobTitle) {
  // Call the Person constructor with the name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method to the Employee prototype called jobGreet()
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
const person = new Person("Alice", 30);
person.greet(); // Output: Hello, my name is Alice, I am 30 years old.

const employee = new Employee("Bob", 25, "Software Engineer");
employee.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 25 years old, and my job title is Software Engineer.
