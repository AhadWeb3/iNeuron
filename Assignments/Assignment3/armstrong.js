/*
Write a program to find whether a given number is armstrong number or
not
The Armstrong number is a number that is equal to the sum of cubes of its digits.
For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.
 Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153

Solution:
*/

/*
to divide a number into its digits we need some function or operator

to find out the last number we can use remainder of the number when divided by 10.

25546 / 10 = 2554.6, remainder = 6.
*/

let num = 25546;
let updatedNum = num;
let sum = 0;
while(num > 0){
    let remainder = (num % 10);
    sum = sum + remainder*remainder*remainder;
    updatedNum = parseInt(num/10);
}
console.log(`sum is ${sum}`);





// let result = (num / 10);
// let updatedNum = parseInt(result);
// console.log(
//     ` Result is ${result}, remainder is ${remainder}, updated Number is ${updatedNum}`);
