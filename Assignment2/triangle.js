
// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene
/*
1)Equilateral triangle means all sides should be equal i.e a==b==c
2) Isosceles triangle means two sides are equal i.e a==b or a==c or b==c 
3)  Scalene triangle means all sides are unequal ie a != b != c
*/
const prompt = require("prompt-sync")();

const a = parseInt(prompt('Enter 1st side of the triangle '));
const b = parseInt(prompt('Enter 2nd side of the triangle '));
const c = parseInt(prompt('Enter 3rd side of the triangle '));


if ((a == b) && (b == c)) {
    console.log('Triangle is equilateral');
} else if ((a == b) || (a == c) || (b == c)) {
    console.log('Triangle is Isosceles');
} else {
    console.log('Triangle is Scalene');
}