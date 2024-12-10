// bubbling child -- parent -- grandparent execute
// document.querySelector('#grandparent').addEventListener('click',()=>{
// console.log('grandparent clicked !')
// });
// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('parent clicked !')
//     })
//     document.querySelector('#child').addEventListener('click',()=>{
//         console.log('child clicked !')
//         })    
    
// capturing or trickling grandarent  -- parent -- child  execute
        document.querySelector('#grandparent').addEventListener('click',()=>{
            console.log('grandparent clicked !')
            },true);
            document.querySelector('#parent').addEventListener('click',()=>{
                console.log('parent clicked !')
                },true)
                document.querySelector('#child').addEventListener('click',()=>{
                    console.log('child clicked !')
                    },true)    
                