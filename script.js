// Person constructor function
function Person(name, age) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Name must be a non-empty string');
  }

  if (typeof age !== 'number' || age < 0) {
    throw new Error('Age must be a non-negative number');
  }

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

  if (typeof jobTitle !== 'string' || jobTitle.trim() === '') {
    throw new Error('Job title must be a non-empty string');
  }

  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
