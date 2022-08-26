const prompt = require('prompt-sync')();

const c = parseInt(prompt("Enter temperature in celcius:"));

let f = ((c/5)*9)+32;
console.log(`${c}°C is ${f}°F`);

