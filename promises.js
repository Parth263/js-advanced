// promises in js //
//Do an async task
// DB calls, cryptography, network

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Async task is completed')
//         resolve();
//     }, 1000);
// })

// promiseOne.then (function(){
//     console.log('Promise consumed')
// })

// // promise two 

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 5000)
// }).then(function(){
//     console.log('Async task 2 is resolved')
// })

// // promise three //
// const promiseThree = new Promise(function(resolve, reject){
//  setTimeout(function(){
//   resolve({username: "Parth", email: "parth@example.com"})
//  }, 2000)
// })
// promiseThree.then( (user) => {
//  console.log(user.username)
// })

// promise four // 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('something went wrong')
        }
    }, 3000)
})

promiseFour
.then( (user) => {
console.log(user)
})
.catch( (error) => {
 console.log(error)
})

// promise five // 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch (error){
        console.log(error)
    }
}

consumePromiseFive()
