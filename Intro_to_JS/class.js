class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  // Create an instance of the Animal class
  const animal = new Animal('Leo');
  
  // Call the speak method
  animal.speak(); // Output: Hello, my name is Leo.

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class
  const person = new Person('John', 30);
  
  // Call the greet method
  person.greet(); // Output: Hello, my name is John and I am 30 years old.
  


  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`The ${this.make} ${this.model} is starting.`);
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car('Toyota', 'Corolla', 2022);
  
  // Call the start method
  myCar.start(); // Output: The Toyota Corolla is starting.



  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Create an instance of the Rectangle class
  const rectangle = new Rectangle(5, 10);
  
  // Call the getArea method
  const area = rectangle.getArea();
  console.log('Area of the rectangle:', area); // Output: Area of the rectangle: 50
  


  
  
  
  class Square extends Rectangle {
    constructor(sideLength) {
      // Call the constructor of the parent class (Rectangle) using super()
      super(sideLength, sideLength);
      this.sideLength = sideLength;
    }

    
  
    // Override the getArea method for Square
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  // Create an instance of the Square class
  const square = new Square(5);
  
  // Call the getArea method
  const area1 = square.getArea();
  console.log('Area of the square:', area); // Output: Area of the square: 25
  
  
  class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  }
  
  // Create an instance of the BankAccount class
  const myBankAccount = new BankAccount('123456789', 'John Doe', 1000);
  
  // Call the deposit method
  myBankAccount.deposit(500); // Output: Deposited $500. New balance: $1500
  


  class Person1 {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    sendEmail(message) {
      console.log(`Sending email to ${this.name} at ${this.email}:`);
      console.log(`Message: ${message}`);
    }
  }
  
  // Create an instance of the Person class
  const person2 = new Person1('John Doe', 'johndoe@example.com');
  
  // Call the sendEmail method
  person2.sendEmail('Hello, this is a test email!'); 


  class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    discount(percentage) {
      const discountAmount = (percentage / 100) * this.price;
      const discountedPrice = this.price - discountAmount;
      return discountedPrice;
    }
  }
  
  // Create an instance of the Product class
  const product = new Product('Laptop', 1000, 'High-performance laptop for productivity.');
  
  // Call the discount method with a percentage
  const discountedPrice = product.discount(10); // 10% discount
  
  console.log(`Discounted Price: $${discountedPrice}`);
  
  