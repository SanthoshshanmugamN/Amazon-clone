//  Promise all

/* const P1=new  Promise((resolve,reject)=>{
setTimeout(()=>resolve('P1 success'),3000)
})
const P2=new  Promise((resolve,reject)=>{
setTimeout(()=>reject('P2 Fail'),1000) // fail return the f2 fail only 
})
const P3=new  Promise((resolve,reject)=>{
setTimeout(()=>resolve('P3 success'),2000)
})
Promise.all([P1,P2,P3])
.then((res)=>{
console.log(res)
})
.catch((err)=>{
    console.error(err)
    }) */

// Promise settled 
      /*  const P1=new  Promise((resolve,reject)=>{
        setTimeout(()=>resolve('P1 success'),3000)
        })
        const P2=new  Promise((resolve,reject)=>{
        setTimeout(()=>reject('P2 Fail'),1000)  
        })
        const P3=new  Promise((resolve,reject)=>{
        setTimeout(()=>resolve('P3 success'),2000)
        })
        Promise.allSettled([P1,P2,P3])
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
            console.error(err)
            })  */


 // Promise race
            
 /* const P1=new  Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P1 success'),1000) // whatever takes the least time it will ne return 
    })
    const P2=new  Promise((resolve,reject)=>{
    setTimeout(()=>reject('P2 Fail'),1000)  
    })
    const P3=new  Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P3 success'),2000)
    })
    Promise.race([P1,P2,P3])
    .then((res)=>{
    console.log(res)
    })
    .catch((err)=>{
        console.error(err)
        })                    
*/

// Promise any

        const P1=new  Promise((resolve,reject)=>{
            setTimeout(()=>resolve('P1 success'),1000) // whatever the first success it will be return
            })
            const P2=new  Promise((resolve,reject)=>{
            setTimeout(()=>reject('P2 Fail'),1000)  
            })
            const P3=new  Promise((resolve,reject)=>{
            setTimeout(()=>resolve('P3 success'),2000)
            })
            Promise.any([P1,P2,P3]) // P1,P2,P3 all are fails it will be return aggregate error 
            .then((res)=>{
            console.log(res)
            })
            .catch((err)=>{
                console.error(err)
                })                    