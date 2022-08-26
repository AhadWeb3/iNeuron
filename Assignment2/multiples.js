/*
Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
    Solution
    conditions to be multiples of number
    1) Multiple should be greater than given number
    2) Multiple should be divisible by number atlest once
        a) which means remainder should not be in fractions
        b) we can find out the multiples by muliplying given number by integers 
            i.e 2*1=2
                2*2=4.
                2*3=6..
                for(let i=1, sum < 1000, i+1){
                    sum += 2*i;
                }
*/ 

const prompt = require("prompt-sync")();
const number = parseInt(prompt('Enter the number to find out the factorial: '));

let sum = 0;
for(let i=1; sum <= 1000; i+1){
    sum = sum + number*i;
}
console.log(`Sum of multiples of ${number} under 1000 is ${sum}`);
