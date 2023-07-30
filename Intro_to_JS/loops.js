const products = [
    {
      name: 'Laptop',
      price: 800,
      quantity: 10
    },
    {
      name: 'Smartphone',
      price: 500,
      quantity: 20
    },
    {
      name: 'Headphones',
      price: 50,
      quantity: 50
    },
    {
      name: 'Monitor',
      price: 300,
      quantity: 15
    },
    {
      name: 'Keyboard',
      price: 30,
      quantity: 25
    }
  ];
  
  console.log(products);
  
  // Loop through the products array and print name and price of each product
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`Product Name: ${product.name}, Price: ${product.price}`);
  }
  let lowestPriceProduct = products[0]; // Assuming the first product has the lowest price
let i = 1;

// Loop through the products array to find the product with the lowest price
while (i < products.length) {
  if (products[i].price < lowestPriceProduct.price) {
    lowestPriceProduct = products[i];
  }
  i++;
}

// Print out the name and price of the product with the lowest price
console.log(`Product with lowest price: ${lowestPriceProduct.name}, Price: ${lowestPriceProduct.price}`);

let totalValue = 0;

// Loop through the products array using for...of loop
for (const product of products) {
  totalValue += product.price * product.quantity;
}

console.log('Total value of all products:', totalValue);

// Loop through the products array using for...in loop
for (const product of products) {
    console.log('Product properties:');
    for (const property in product) {
      console.log(`${property}: ${product[property]}`);
    }
  }

  for (let i = 1; i <= 100; i++) {
    let output = '';
  
    if (i % 3 === 0) {
      output += 'Fizz';
    }
  
    if (i % 5 === 0) {
      output += 'Buzz';
    }
  
    console.log(output || i);
  }
  