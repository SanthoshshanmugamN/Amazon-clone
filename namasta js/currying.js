// function  currying one method call as closures another bind method
// currying -- transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
// bind
let multiply = function(x,y){
    console.log(x*y)
}

let multiplyBYTwo=multiply.bind(this,2);
multiplyBYTwo(5);

// closures 
let multiple =function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyBYTwo2=multiple(2);
multiplyBYTwo2(5);