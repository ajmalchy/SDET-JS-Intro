function mergeArrays(array1, array2) {
    const mergedArray = [...array1, ...array2];
    return mergedArray;
  }
  
  // Example usage:
  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];
  
  const mergedNumbers = mergeArrays(numbers1, numbers2);
  console.log(mergedNumbers);

  function addStringToBeginning(arr, strToAdd) {
    const newArray = [strToAdd, ...arr];
    return newArray;
  }
  
  // Example usage:
  const originalArray = ['apple', 'banana', 'orange'];
  const stringToAdd = 'pear';
  
  const newArrayWithAddedString = addStringToBeginning(originalArray, stringToAdd);
  console.log(newArrayWithAddedString);

  function addObjectKeyValuePair(obj, key, value) {
    const newObject = { ...obj, [key]: value };
    return newObject;
  }
  
  // Example usage:
  const originalObject = { name: 'John', age: 30 };
  const keyToAdd = 'occupation';
  const valueToAdd = 'Engineer';
  
  const newObjectWithAddedPair = addObjectKeyValuePair(originalObject, keyToAdd, valueToAdd);
  console.log(newObjectWithAddedPair);

  function findLargestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let largest = numbers[0]; // Assume the first number is the largest
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i]; // Update largest if a larger number is found
      }
    }
  
    return largest;
  }
  
  // Example usage:
  const numbersArray = [15, 7, 23, 9, 42, 17];
  
  const largestNumber = findLargestNumber(numbersArray);
  console.log('Largest number:', largestNumber);

  function sortStringsAlphabetically(strings) {
    return strings.slice().sort();
  }
  
  // Example usage:
  const originalArray1 = ['banana', 'apple', 'orange', 'pear'];
  
  const sortedArray = sortStringsAlphabetically(originalArray);
  console.log(sortedArray);
  
  
  