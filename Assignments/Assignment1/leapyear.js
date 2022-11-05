const prompt = require('prompt-sync')();

const year = parseInt(prompt("Enter the year to find out if it's a leap year or not:"));

/* Evenly divisible by number means remainder should be 0
i.e Condition 1: leap year if its divisible by 4, reaminder should be zero ( year % 4 === 0)
    Condition 2: not a leap year if its divisible by 100  (year % 100 == !0)
    if 1 & 2 are true then its leap year
    Or 
    Condtion 3: it's divisible by 400 (year % 400 === 0 && year % 100 === 0), if only condition is true, then it's a leap year
*/

if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
    return console.log("Is a leap year");
} else{
    return console.log(`${year} is not a leap year`);
}





