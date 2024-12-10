c();// function statement execute and display it

// b(1,2); // type error : b is not defined   , 1 and 2 are arguments
// function statement  also known as function declaration
function c(){
    console.log('a called')
 }
// Function expression 
var b = function (param1) { // parameters
    return function xyz(){   // The ability to use function  xyz as values to return function known as First class function...

    }
}
console.log(b);
// Anonymous Function -- function without name it is called anonymous function , anonymous doesn't have  own identity 
// function (){
// }

// Nested Function Expression

// Difference between Parameters and arguments

// First class functions

// arrow functions
