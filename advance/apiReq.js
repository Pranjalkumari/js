// In JavaScript, you can make API requests using different methods, such as:

// Using fetch() (Modern & Recommended)

// Using XMLHttpRequest (Older, Less Common)

// Using Axios (Third-party Library)


// -----------promises-----------------

// The fetch() function is a modern way to make API requests.
//  It returns a Promise, which allows handling responses asynchronously.

// The Promise object represents the eventual completion (or failure) of an 
// asynchronous operation and its resulting value.
// instead of immediately returning the final value, the asynchronous method 
// returns a promise to supply the value at some point in the future.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
const promiseOne = new Promise(function(resolve,reject){//as promise is object
setTimeout(function(){
    console.log('asyn task in complete');
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");//print , when  give resolve resolve() 
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user:'pranjal', email:'example@gmail'})
    },1000)
})
// promiseTwo.then(function(name){
//     console.log(name)
// })

//--------------chaining------------------
 promiseTwo.then(function(name){
    console.log(name)
    return name.email;
 }).then(function(email){
    console.log(email)
 })


 const three = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error= true
        let error = false;
        if(!error )
             resolve({user:'pk', email:'123'})
        else{
            reject('ERROR')
        }
    },1000)
 })

 three
 .then(function(user)
{
    console.log(user);
    return user.user;
})
.then(function(user){
    console.log(user)
})
.catch(function(error){
     console.log(error)
}).finally(()=>console.log("the promise is either resolve or rejected"))// always exxcuted
 


//-----------we can also handle the promises by async/await--------------
//async can not handle error directly - use try and catch



const four = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error= true
        let error = false;
        if(!error )
             resolve({user:'prerna', email:'yayy'})
        else{
            reject('ERROR')
        }
    },1000)
 })

 async function consumePromise() {
    try{
        const response = await four
        console.log(response);
        

    } catch(error){
        console.log(error);
        
    }
 }

 consumePromise();


//---------------------------------
 async function getAllUsers() {
    try {
          const res = await fetch('http://jsonplaceholder.typicode.com/users')
           const data = await res.json()// await - bcz it is also take time , 
// json - for convert to object bcz data in string 
           console.log(data);
    } catch (error) {
        console.log("err", error);
    }
 }

 //getAllUsers()

 //---------------by fetch API--------------------

  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>console.log(error))  // fetchh executes first  bcz its go 

  //The fetch() function will reject the promise on some errors, 
  // but not if the server responds with an error status like 404: 
  // so we also check the response status and throw if it is not OK.