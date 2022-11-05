const prompt = require('prompt-sync')();

const input1 = parseInt(prompt("Enter temperature in celcius:"));
const input2 = parseInt(prompt("Enter temperature in Farenhiet:"));


let f = ((input1/5)*9)+32;
console.log(`${input1}°C is ${f}°F`);

let c = ((input2-32))*5/9;
console.log(`${input2}°F is ${c}°C`);

