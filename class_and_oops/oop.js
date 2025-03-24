// const user = {
//     username:"pk",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//        // console.log(`Username: ${this.username}`);
//       // console.log(`hey`);
//       console.log(this);
      
       
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());//undefined
// console.log(this);


//constructor function - give a new instance 

function User(username, loginCount, isLoggedIn){
    this.username = username;// this.username is variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}


const userOne = new User("pk", 12, true) //steps =1)new object create 
// 2) construction function call due to new keyword , it packs all the arguments and give 
// 3)all arg injects in this keyword

const userTwo = new User("shubham", 11, true)
console.log(userOne);
console.log(userTwo);



//The instanceof operator tests to see if the prototype property of a constructor appears anywhere 
// in the prototype chain of an object. The return value is a boolean value.
//  Its behavior can be customized with Symbol.hasInstance.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car("Honda", "Accord", 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
