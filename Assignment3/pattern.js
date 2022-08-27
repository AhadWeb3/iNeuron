// Using for loops, write a Javascript program to output the following
// pattern
/*
1
2 3
4 5 6
7 8 9 10
for numbers its just for(i=1,i<=10,i++); console.log(i);
*/
// for(i=1;i<=10;i++){
//     if(i<=1){console.log(i);}
//     if(i<=3 && i>1){console.log(i);}
//     if(i<=6 && i>3){console.log(i);}
//     if(i<=10 && i>6){console.log(i);}
// }

let n = rows = 5;
let m = columns = 5;
string = "";
for (let j = 0; j < n; j++) {                                  //number of rows
  for (let i = 0; i < m; i++) {  // number of stars in single row
    if (j === 0 || j === m - 1) {
      string += "*";
    } else {
      if (i === 0 || i === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string = string + "\n";
  }
}
console.log(string);