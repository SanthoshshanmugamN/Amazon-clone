 'use strict'
// this in global 
console.log(this)  // global object where you are running the piece of code

// this inside a function 
function x(){
    console.log(this)
}
x() // using strict mode this keyword is undefined but without strict it gives window value

// this inside a object method 
// const obj ={
//     a : 10,
//     x : function(){ // inside a object x is called as method 
//         console.log(this.a); // this mentioned obj and  a -- obj inside a value
//     }
// }
// obj.x()


// this inside arrow functions 
const obj ={
    a : 10,
    x : ()=>{ 
        console.log(this); // 	Inside arrow functions it will performs global space
},
}
obj.x()


const obj2 ={
    a : 10,
    x : function (){ 
// enclosing lexical content
       const y=()=> { 
        console.log(this); // 	Inside arrow functions it will performs global space means global object
       }
       y()
},
}
obj2.x()


// call apply & bind 
// let name ={ 
//     firstName :  'santhosh',
//     lastName :  'kumar'
// }
// let printFullName=function (hometown,state){
//     console.log(this.firstName+' '+this.lastName+' '+hometown+' '+state)
    
// }
// printFullName.call(name,'salem ',' tamilnadu') // call--argument passed as individual

// let name2 ={ 
//     firstName :  'Aakash',
//     lastName :  'kumar'
// }
// let printFullName2=function (hometown,state){
//     console.log(this.firstName+' '+this.lastName+' '+hometown+' '+state)
    
// }
// printFullName2.apply(name2,['erode ',' tamilnadu']) // apply--second argument passed as array 

// // bind method look as exactly same as call method
// let printMyName=printFullName.bind(name,'salem ',' tamilnadu')  // it gives copy but it can be which invoke later... 
// console.log(printMyName)
// printMyName();


