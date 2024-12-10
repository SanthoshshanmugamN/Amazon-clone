let Fname ={
    firstName :  'prem',
    lastName :  'kumar'
}
let printName=function (hometown,state,country){
    console.log(this.firstName+' '+this.lastName+' '+hometown+' '+state+' '+country)
    
}

let printMyName = printName.bind(Fname,"salem","Tamilnadu")
printMyName("ambur");
// own implementation of bind function 

Function.prototype.mybind= function(...args){
let obj=this,
param =args.slice(1)
return function(...args2){
    obj.apply(args[0],[...param,...args2])
}
}
let printMyName2 = printName.mybind(Fname,"salem","Tamilnadu")
printMyName2("ambur");