// what is callback function in js 
 setTimeout(function(){
    console.log('timer');
 },5000)

 function x(y){
console.log('x')
y();
 }
 x(function y(){
    console.log('y')

 })



//javascript is a synchronous and single threaded language 

//Blocking the Main thread


// power of callbacks 


// Deep about event Listeners
document.getElementById('clickMe').addEventListener("click",function(){
    console.log('button clicked')
})

// closures demo with event Listeners

//scope demo with event Listeners

// garbage collections and remove event Listeners 
