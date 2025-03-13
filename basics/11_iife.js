// Immediately Invoked Function Expressions (IIFE)
//for immediate execution, some times problem occure due to global scope polution , so use iife  (global polution ke variables ko htane ke liye use krte h iife)

(function make(){
    //name iife
    console.log(`we make it`)
})();// ; important to stop execution and start new IIFE

//() first parentheses for write function () second for execution 

(()=>{
    console.log(`hey i am `)
})();

// give parameter 
((name)=> {
    console.log(`hi i am ${name}`)
})('pranjal')//give argument here /we call it here