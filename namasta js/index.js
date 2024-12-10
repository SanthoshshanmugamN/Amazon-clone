
// let x=1;
// a();
// b();
// console.log(x)
//  function a(){
//     let x=10
//     console.log(x);
// }
// function b(){
//     let x=100
//     console.log(x);
// }



// {
//     let a=10;  // block scope
//     const b=100; // block scope
//     var c=5; // global scope
//     console.log(b)  // print b
//     console.log(a)   // print a
// }
// console.log(c)  // print c




// {
//     let a; 
//     console.log(a);  // initialize Memory of -- 'a' but not assign a value it is called undefined...
// }
// console.log(a);  // a is not defined   it is not initialize a memory of -- 'a' 



// var a=100;
// let b=40;// this b shadowing of outside scope of b=40;
// const c=50;
// {
// var a =10;
// let  b=20; 
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



// block lexical scope 
const a=100;
{
    const a=200;
    {
        const a=20;
        console.log(a) // a -- nearest value will be taken
    }
    console.log(a) // a -- nearest value will be taken
}
console.log(a)