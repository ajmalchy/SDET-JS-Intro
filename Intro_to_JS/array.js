const studentNames = ['Alice', 'Bob', 'Catherine', 'David', 'Eva'];

console.log(studentNames);
// console.log(studentNames.length);
// console.log(studentNames.pop());
// newArray = studentNames.push('Jayed');
// console.log(newArray);
const removeFirstName = studentNames.shift();
console.log(removeFirstName);
console.log(studentNames);
const addFirstName = studentNames.unshift('Buffle');
console.log(studentNames);
studentNames.splice(1, 0, 'Helen', 'Ivan');
console.log(studentNames);

const includesJohn = studentNames.includes('John');
console.log(includesJohn);

console.log(studentNames.indexOf('Kate'));

const reverseIndex = studentNames.reverse();
console.log(reverseIndex);

const lastIndexValue = reverseIndex.length - 1;
const lastIndex = studentNames[lastIndexValue];
console.log(lastIndex);


// Check if the first index value equals the last index value
const isFirstEqualsLast = studentNames[0] === studentNames[studentNames.length - 1];

console.log('Is first index value equal to last index value?', isFirstEqualsLast);
