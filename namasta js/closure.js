// function x(){
//     let x=4;
//     function y(){
//         console.log(x);
//     }
//     return y;

// }
// var z=x();
// console.log(z);
// z()

// interview asked questions 
// function x(){
// for(let i=1;i<=5;i++){
// setTimeout(function (){
//   console.log(i);
// },i*1000);
// }
// }
// x();


// constructor
function counter(){
  let count=0;
  this.increment=function(){
    count++;
    console.log(count)
  }
  this.decrement=function(){
    count--;
    console.log(count)
  }
}
var counter1 = new counter();
counter1.increment();
counter1.decrement();
counter1.increment();