function sumNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbersArray = [5, 10, 15, 20];
  
  const sum = sumNumbers(numbersArray);
  console.log('Sum:', sum);

  function reverseString(str) {
    let reversed = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  
  // Example usage:
  const originalString = 'Hello, World!';
  
  const reversedString = reverseString(originalString);
  console.log('Reversed String:', reversedString);

  function filterPeopleOver18(people) {
    return people.filter(person => person.age > 18);
  }
  
  // Example usage:
  const peopleArray = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 17, gender: 'Female' },
    { name: 'Michael', age: 30, gender: 'Male' },
    { name: 'Emma', age: 22, gender: 'Female' }
  ];
  
  const adultsArray = filterPeopleOver18(peopleArray);
  console.log('Adults:', adultsArray);
  

  function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  
  // Example usage:
  const numbersArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenNumbersArray = filterEvenNumbers(numbersArray);
  console.log('Even numbers:', evenNumbersArray);
  
  function filterStringsStartingWithA(strings) {
    return strings.filter(str => str.startsWith('A'));
  }
  
  // Example usage:
  const stringsArray = ['Apple', 'Banana', 'Orange', 'Avocado', 'Grapes'];
  
  const stringsStartingWithA = filterStringsStartingWithA(stringsArray);
  console.log('Strings starting with "A":', stringsStartingWithA);

  function getBooksPublishedAfter2000(books) {
    const booksPublishedAfter2000 = books
      .filter(book => book.published >= 2000)
      .map(book => book.title);
  
    return booksPublishedAfter2000;
  }
  
  // Example usage:
  const booksArray = [
    { title: 'Book 1', author: 'Author 1', published: 1998 },
    { title: 'Book 2', author: 'Author 2', published: 2003 },
    { title: 'Book 3', author: 'Author 3', published: 2005 },
    { title: 'Book 4', author: 'Author 4', published: 1999 },
    { title: 'Book 5', author: 'Author 5', published: 2001 }
  ];
  
  const booksPublishedAfter2000 = getBooksPublishedAfter2000(booksArray);
  console.log('Books published after 2000:', booksPublishedAfter2000);
  
  function findLargerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Example usage:
  const number1 = 25;
  const number2 = 15;
  
  const largerNumber = findLargerNumber(number1, number2);
  console.log('Larger number:', largerNumber);


  function findSmallestNumber(numbers) {
    return Math.min(...numbers);
  }
  
  // Example usage:
  const numbersArray2 = [10, 5, 20, 3, 15];
  
  const smallestNumber = findSmallestNumber(numbersArray);
  console.log('Smallest number:', smallestNumber);
  
  function findLongestString(strings) {
    let longest = '';
  
    for (const str of strings) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
  
    return longest;
  }
  
  // Example usage:
  const stringsArray2 = ['apple', 'banana', 'orange', 'grapefruit'];
  
  const longestString = findLongestString(stringsArray);
  console.log('Longest string:', longestString);


  
  function filterStudentsWithGradeA(students) {
    return students.filter(student => student.grade === "A");
  }
  
  // Example usage:
  const studentsArray = [
    { name: 'John', grade: 'B' },
    { name: 'Jane', grade: 'A' },
    { name: 'Michael', grade: 'A' },
    { name: 'Emma', grade: 'C' }
  ];
  
  const studentsWithGradeA = filterStudentsWithGradeA(studentsArray);
  console.log('Students with grade A:', studentsWithGradeA);
  
  
  