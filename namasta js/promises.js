
/*
const promise = createOrder(cart)  //object that represents the eventual completion -- createOrder asynchronous operation
//   or failure of an asynchronous operation. 
promise.then(function(orderId){
    proceedTopayment(orderId)})


    // promise chaining :
    createOrder(cart,function(orderId){   // callback hell 
        proceedTopayment(orderId,function (paymentInfo){
            ShowOrderSummary(paymentInfo,function(){
                updateWalletBalance()
            })
        })
    })

    //  avoid callback hell will be using promise chaining
    createOrder(cart).
    then(function (orderId){
        return proceedTopayment(orderId);
    })
    .then(function (paymentInfo){
       return ShowOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo){
        return updateWalletBalance(paymentInfo);
    })   
*/ 

    // create a own promise

    const cart=["shoes","pants","kurta"]
    const promise = createOrder(cart)
   promise.then(function(orderId){  //  inversion of control  -- lose of control // then is a success part 
       console.log(orderId)
       return orderId;
   })
   .then(function (orderId){
    return proceedTopayment(orderId);
   })
   .then(function (paymentInfo){
    console.log(paymentInfo);
   })
   .catch(function (err){  // catch -- failure part
       console.log(err.message)
   })

    function createOrder(cart){
        const pr =new Promise(function(resolve,reject){  // constructor
            if(!validatecart(cart)){
                const err =new Error("cart is not valid")
                reject(err)
            }
            const orderId = '12345'
            if(orderId){
                resolve(orderId);
            }
        })
        return pr;
    }
    function proceedTopayment(orderId){
        return new Promise(function(resolve,reject){
            resolve('payment successfully')
        })
    }
    function validatecart(cart){
         return true;
       //return false;
    }

