function getBookTitles(books) {
    return books.map(book => book.title);
  }
  
  // Example usage:
  const booksArray = [
    { title: 'Book 1', author: 'Author 1', published: 1998 },
    { title: 'Book 2', author: 'Author 2', published: 2003 },
    { title: 'Book 3', author: 'Author 3', published: 2005 },
    { title: 'Book 4', author: 'Author 4', published: 1999 },
    { title: 'Book 5', author: 'Author 5', published: 2001 }
  ];
  
  const bookTitles = getBookTitles(booksArray);
  console.log('Book titles:', bookTitles);


  function getProductsInStock(products) {
    return products.filter(product => product.inStock);
  }
  
  // Example usage:
  const productsArray = [
    { name: 'Product 1', price: 10, inStock: true },
    { name: 'Product 2', price: 15, inStock: false },
    { name: 'Product 3', price: 20, inStock: true },
    { name: 'Product 4', price: 25, inStock: true },
    { name: 'Product 5', price: 30, inStock: false }
  ];
  
  const productsInStock = getProductsInStock(productsArray);
  console.log('Products in stock:', productsInStock);
  

  function findUserByEmail(users, emailToFind) {
    return users.find(user => user.email === emailToFind);
  }
  
  // Example usage:
  const usersArray = [
    { name: 'John Doe', email: 'john@example.com', age: 30 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { name: 'Michael Johnson', email: 'michael@example.com', age: 35 },
    { name: 'Emma Brown', email: 'emma@example.com', age: 28 }
  ];
  
  const userEmailToFind = 'jane@example.com';
  const foundUser = findUserByEmail(usersArray, userEmailToFind);
  
  if (foundUser) {
    console.log('User found:', foundUser);
  } else {
    console.log('User not found.');
  }
  
  
  function areAllTasksComplete(tasks) {
    return tasks.every(task => task.complete === true);
  }
  
  // Example usage:
  const tasksArray = [
    { title: 'Task 1', complete: true },
    { title: 'Task 2', complete: true },
    { title: 'Task 3', complete: false },
    { title: 'Task 4', complete: true }
  ];
  
  const allTasksComplete = areAllTasksComplete(tasksArray);
  console.log('All tasks complete:', allTasksComplete);
  

  function calculateTotalAmountSpent(purchases) {
    return purchases.reduce((total, purchase) => total + purchase.amount, 0);
  }
  
  // Example usage:
  const purchasesArray = [
    { item: 'Product 1', amount: 10 },
    { item: 'Product 2', amount: 15 },
    { item: 'Product 3', amount: 20 },
    { item: 'Product 4', amount: 25 }
  ];
  
  const totalAmountSpent = calculateTotalAmountSpent(purchasesArray);
  console.log('Total amount spent:', totalAmountSpent);


  function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5];
  
  const sumOfNumbers = calculateSum(numbersArray);
  console.log('Sum of numbers:', sumOfNumbers);


  function convertToUppercase(strings) {
    return strings.map(str => str.toUpperCase());
  }
  
  // Example usage:
  const stringsArray = ['hello', 'world', 'javascript'];
  
  const uppercaseArray = convertToUppercase(stringsArray);
  console.log('Uppercase array:', uppercaseArray);


  function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  
  // Example usage:
  const numbersArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenNumbersArray = getEvenNumbers(numbersArray);
  console.log('Even numbers array:', evenNumbersArray);
  
  
  function getStringsWithLengthFourOrLess(strings) {
    return strings.filter(str => str.length <= 4);
  }
  
  // Example usage:
  const stringsArray3 = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
  
  const shortStringsArray = getStringsWithLengthFourOrLess(stringsArray);
  console.log('Strings with length 4 or less:', shortStringsArray);
  
  