const num = 10;

if(num % 2 == 0){
    console.log('The number is even');
}
else console.log('The number is odd');

/* let age = 24;
If the age is less than 18, display "You are a minor".
If the age is between 18 and 65 (inclusive), display "You are an adult".
If the age is greater than 65, display "You are a senior citizen".*/

let age = 24;
if( age < 18){
    console.log('You are a minor');
} else 
if(age >= 18 && age <= 65){
    console.log('You are an adult');
} else 
if(age > 65){
    console.log('You are a senior citizen');
}

// vowel or consonent
let letter = "A";
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log('The letter is a vowel');
}
else console.log('The letter is a consonent');

// 
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

let largestNumber;

if (numberOne >= numberTwo && numberOne >= numberThree) {
  largestNumber = numberOne;
} else if (numberTwo >= numberOne && numberTwo >= numberThree) {
  largestNumber = numberTwo;
} else {
  largestNumber = numberThree;
}

console.log('The largest number is:', largestNumber);

// password
let password = "Test123*";

if ( password.length < 8){
    console.log('Password too short');
} else 
if (password == "Test1233*"){
    console.log('Password accepted');
} else console.log('Password rejected');
