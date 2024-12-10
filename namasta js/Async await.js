// always return promise 
// async is a keyword 
// it is used to async function


// promise
const p=new Promise(function(resolve,reject){
    setTimeout(()=>{
   resolve("promise will be resolved")
    },4000)
})

// async function getName(){
//  return p;
// }
// // const fname = getName()
// // console.log(fname)  // it is given promise 
// const fnamePromise = getName()

// p.then(res=>console.log(res)); // it is given exact return name


// async await 
//await -- is a keyword it will be only used inside an  Async function

async function handlePromise(){
    // js engine does not wait for anything 
    //  async await -- was waiting for promise to resolved before -- function execution is suspended only in call stack
    const val = await p;
    console.log('hi santhosh') // async await wait the oint of the time program will wait over here
    console.log(val)
}
handlePromise();

// normal function
// function getData(){
//     p.then((res)=>console.log(res));
// console.log('hi santhosh')
// }
// getData();

// fetch => Resonse.json => json value