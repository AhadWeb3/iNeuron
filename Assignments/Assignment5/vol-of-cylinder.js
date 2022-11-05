const prompt = require("prompt-sync")();

const radius = parseInt(prompt("Radius: "));
const height = parseInt(prompt("Height: "));

class volumeClass {
  constructor() {}
}

let cylinder = 3.14 * (radius * 2) * height;
let sphere = (4 / 3) * 3.14 * (radius ^ 3);
let cone = 3.14 * (radius * 2) * (height / 3);

console.log(`The Volume of cylinder is ${cylinder}`);
console.log(`The Volume of sphere is ${sphere}`);
console.log(`The Volume of cone is ${cone}`);
