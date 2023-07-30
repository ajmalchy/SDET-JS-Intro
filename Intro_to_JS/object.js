const employee = {
    name: 'John Doe',
    age: 30,
    salary: 50000,
    jobTitle: 'Software Engineer',
  
    work: function () {
      console.log(`${this.name} is working.`);
    },
  
    takeBreak: function () {
      console.log(`${this.name} is taking a break.`);
    },
  
    attendMeeting: function () {
      console.log(`${this.name} is attending a meeting.`);
    }
  };
  
  // Accessing attributes and calling methods
  console.log('Name:', employee.name);
  console.log('Age:', employee.age);
  console.log('Salary:', employee.salary);
  console.log('Job Title:', employee.jobTitle);
  
  employee.work();
  employee.takeBreak();
  employee.attendMeeting();

  const bankAccount = {
    accountNumber: '1234567890',
    balance: 1000,
    accountType: 'Savings',
  
    deposit: function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Invalid amount for deposit.');
      }
    },
  
    withdraw: function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Insufficient balance or invalid amount for withdrawal.');
      }
    },
  
    transfer: function (amount, targetAccount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        targetAccount.balance += amount;
        console.log(`Transferred ${amount} to account ${targetAccount.accountNumber}. New balance: ${this.balance}`);
      } else {
        console.log('Insufficient balance or invalid amount for transfer.');
      }
    }
  };
  
  // Accessing attributes and calling methods
  console.log('Account Number:', bankAccount.accountNumber);
  console.log('Balance:', bankAccount.balance);
  console.log('Account Type:', bankAccount.accountType);
  
  bankAccount.deposit(500);
  bankAccount.withdraw(200);
  bankAccount.transfer(300, { accountNumber: '0987654321', balance: 500, accountType: 'Checking' });

  const dog = {
    breed: 'Labrador Retriever',
    age: 3,
    color: 'Golden',
  
    bark: function () {
      console.log('Woof! Woof!');
    },
  
    wagTail: function () {
      console.log('The tail is wagging happily.');
    },
  
    fetch: function () {
      console.log('Fetching the ball...');
    }
  };
  
  // Accessing attributes and calling methods
  console.log('Breed:', dog.breed);
  console.log('Age:', dog.age);
  console.log('Color:', dog.color);
  
  dog.bark();
  dog.wagTail();
  dog.fetch();
  
//   
function Product(name, price, manufacturer, category) {
    this.name = name;
    this.price = price;
    this.manufacturer = manufacturer;
    this.category = category;
  }
  
  // Create a new Product object
  const product1 = new Product('Smartphone', 499.99, 'Samsung', 'Electronics');
  const product2 = new Product('Laptop', 899.99, 'Dell', 'Electronics');
  const product3 = new Product('T-Shirt', 19.99, 'Nike', 'Apparel');
  
  // Accessing product properties
  console.log('Product 1:', product1);
  console.log('Product 2:', product2);
  console.log('Product 3:', product3);
  
  // Price increase by $10
const priceIncrease = 10;

// Update the price for each product
product1.price += priceIncrease;
product2.price += priceIncrease;
product3.price += priceIncrease;

// Accessing product properties after price increase
console.log('Product 1 (After Price Increase):', product1);
console.log('Product 2 (After Price Increase):', product2);
console.log('Product 3 (After Price Increase):', product3);

const blogPosts = [
    {
      title: 'Post 1',
      author: 'John Doe',
      date: '2023-07-26',
      content: 'This is the content of Post 1'
    },
    {
      title: 'Post 2',
      author: 'Jane Smith',
      content: 'This is the content of Post 2'
    },
    {
      title: 'Post 3',
      author: 'Michael Johnson',
      date: '2023-07-28',
      content: 'This is the content of Post 3'
    },
    // Add more blog post objects as needed
  ];
  
  const isDateEmpty = blogPosts.some(post => !post.date);
  
  console.log('Is date field empty on any object?', isDateEmpty);
  
  