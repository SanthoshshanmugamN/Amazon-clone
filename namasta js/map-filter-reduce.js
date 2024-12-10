const arr=[5,1,2,4,8];
// map --  map() is a method of the Array object ,
// It creates a new array by calling a function on every element of the original array 
// and storing the results in a new array.
const output = arr.map(function double(x){ // higher order function
    return x*2;
 });
console.log(output)

// filter the odd values -- The filter() method creates a new array filled with elements that pass a test provided by a function. 

const output1=arr.filter(function idOdd(x){
    return x%2;
})
console.log(output1);


// reduce 
// normal function

function findMax(arr) {
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
    
    return max;
}
console.log(findMax(arr));

// using reduce to change the normal function
// reduce --	To take the all the element of the array come up with single array value of them 
// acc -- max
// curr -- arr

const output2=arr.reduce(function(acc,curr){
if(curr>acc){
    acc=curr;
}
return acc;
},0)
console.log(output2)


// another example of map function 
const users=[
{firstName:"John", lastName:"Doe", age:50},
{firstName:"Jsan", lastName:"Dae", age:50 },
{firstName:"Jssfn", lastName:"voe", age:30},
{firstName:"Jdfbd", lastName:"soe", age:20},
];

const output3=users.map(x=>x.firstName+" "+x.lastName); // mapping the one to one firstname and lastname 
console.log(output3)

// another example of reduce function 
// {50 : 2 , 30 : 1, 20 : 1}
const output4 = users.reduce((acc, curr) => {
    if (curr.age !== undefined) {
        if (acc[curr.age]) {
            acc[curr.age]++;
        } else {
            acc[curr.age] = 1;
        }
    }
    return acc;
}, {});
console.log(output4);


const output5=users.filter((x)=>x.age<=30).map((x)=>x.firstName); // using map and filter 
console.log(output5)


// reduce 

const output6=users.reduce(function (acc,curr){
    if(curr.age<=30){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(output6);
