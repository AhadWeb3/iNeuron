const prompt = require("prompt-sync")();

const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}

add(num1, num2);




/* 
factorial of a number
*/