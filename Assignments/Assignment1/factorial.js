const prompt = require("prompt-sync")();

const num = parseInt(prompt('Enter the number to find its factorial '));
   
function recursive(num){
    if(num === 0 || num === 1){
         return 1;
    }else{
        return num*recurring(num-1);
    }   
}

console.log(`The factorial of ${num} is ${recursive(num)}`);
