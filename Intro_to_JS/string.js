const coder = 'I am a good programmer';
console.log(typeof coder);
console.log(coder.length);
console.log(coder.toUpperCase());
console.log(coder.toLocaleLowerCase());
console.log(coder.includes('good'));
console.log(coder.replace('programmer', ''));
console.log(coder.endsWith('programmer'));

const [beforeGood, afterGood] = coder.split('good');
console.log(beforeGood);
console.log(afterGood);