


const year = 2000;



// If( year%400 == 0 && year)


// console.log(year%4 == 0 );
// console.log(year%100 == !0 );
// console.log(year%400 == 0 );

console.log( year%4 == 0 && year%400 == 0 || year%100 == !0 );

if(year%4 == 0 && year%400 == 0 || year%100 == !0){
    console.log( "This is a leap year")
} else{
    console.log( "This is not a leap year" );
}

