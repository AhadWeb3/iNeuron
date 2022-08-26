const prompt = require('prompt-sync')();

const input = parseInt(prompt("Enter temperature in celcius:"));


let f = ((input/5)*9)+32;
console.log(`${input}°C is ${f}°F`);

let c = ((input-32))*5/9;
console.log(`${input}°F is ${c}°C`);

