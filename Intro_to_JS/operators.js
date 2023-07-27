// arithmatic operators
//  problem 1
const num1 = 10;
const num2 = 15;
const result = num1 * num2;
console.log(result);

//  problem 2
const radius = 18;
const area = 3.1416 * radius ** 2;
console.log(area);

// Assignment operators: 
// problem 1
 let count = 5;
 count += 2;
 console.log(count);

 // problem 2
 let price = 10;
 price *= 2.5;
 console.log(price);

//  comparison operators
// problem 1
const age1 = 25;
const age2 = 28;

 let isAge1GreaterThanAge2 = age1 > age2;
 console.log('is Age 1 greater than Age 2',isAge1GreaterThanAge2);

//  problem 2: 
const personName = "Ajmal";
let isNameNotJohnDoe = personName !== "John Doe";
console.log(isNameNotJohnDoe);

// logical operators
// problem 1
const isMember = false;
const hasCoupon = false; 
if( isMember === true || hasCoupon === true){
    console.log('The customer is eligible for shipping');
}
else console.log('The customer is not eligible for shipping');

// problem 2

const num = 15;
let isNotZero = num != 0 ? true : false;
console.log(isNotZero); 

// conditional operators
//  problem 1:
const voterAge = 19;
if (voterAge >=18){
    console.log('You are old enough to vote');
}
else console.log('You are not old enough to vote');

//  problem 2:

const price1 =  90;
if( price1 >= 100){
    console.log('product on sale');
}
else console.log('the product is not on sale');
