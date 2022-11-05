const prompt = require("prompt-sync")();
/*
4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).

Solution: 
        What are prime number? Prime number is whole number whose factors are only 1 and itself.
            i.e when divided by any other number, remainder is not zero. 
                true == ((prime number)/(any number excluding itself) !== 0);   


*/

/*
Finding out prime number or not.

(2/2),2/3,2/4,2/5,2/6,2/7,2/8,2/9,2/10........
3/2,(3/3),3/4,3/5,3/6,3/7,3/8,3/9,3/10........
(4/2),4/3,(4/4),4/5,4/6,4/7,4/8,4/9,4/10........
5/2,5/3,5/4,(5/5),5/6,5/7,5/8,5/9,5/10........
6/2,(6/3),6/4,6/5,(6/6),6/7,6/8,6/9,6/10........
7/2,7/3,7/4,7/5,7/6,(7/7),7/8,7/9,7/10........
(8/2),8/3,(8/4),8/5,8/6,8/7,(8/8),8/9,8/10........
9/2,9/3,9/4,9/5,9/6,9/7,9/8,9/9,9/10........
(10/2),10/3,10/4,(10/5),10/6,10/7,10/8,10/9,(10/10)........
by this we can say that the divisor will be less than the given number.
we just need to find one divisor which will give a reminder of 0.



let number = parseInt(prompt("number: "));
count = 0;
for (let i = 2; i < number; i++) {
    if((number)%i === 0){
        count = 1;
        break;
    } 
} 
if(count === 0){console.log(`${number} is a prime number`)}
if(count === 1){console.log(`${number} is a not prime number`)}
*/

/*
displaying prime numbers within a range.

*/


// let range = parseInt(prompt("range: "));
//     for(let number = 2; number <= range ; number+1){
//         let count = 0;
//         for (let i = 2; i < number; i++) {
//             if((number)%i === 0){
//                 count = 1;
//                 break;
//             } 
//         } 
//     }
    
// if(count === 0) {console.log(`${number} is a prime number`)}

// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}