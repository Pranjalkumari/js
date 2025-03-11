// console.log("hii")

 

// // Constant and variable  

// // const (not changable) 

// // Variables 

// //    1.  var- scope {}  problem in javascript      

// //     2.  let  

// //     3.  We can also reserve variable memory without using let and var but not good method 

// // Prefer not to use var (issues in bloack scope and functional scope) 

// // Node:   console.table([a,b])  print multiple variable in table  form 

// // let  age =1    output :1 

// // let name        \output : undefined 


// "use strict"; // treat all JS code as newer version

// // alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 
//     +
//      3) // code readability should be high

// console.log("Hitesh")


// let name = "hitesh"
// let age = 18
// let isLoggedIn = false
// let state;

// // number => 2 to power 53
// // bigint
// // string => ""
// // boolean => true/false
// // null => standalone value
// // undefined => 
// // symbol => unique


// // object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


// //=================conversion operation =====================
// let score = "hitesh"

// //console.log(typeof score);
// //console.log(typeof(score));

// let valueInNumber = Number(score)
// //console.log(typeof valueInNumber);
// //console.log(valueInNumber);


// // "33" => 33
// // "33abc" => NaN
// //  true => 1; false => 0


// let booleanIsLoggedIn = Boolean(isLoggedIn)
// //  console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




//======================================nums===============================
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(1))
// const otherNum = 12.345
// console.log(otherNum.toPrecision(4))
// const num3 = 10000000
// console.log(num3.toLocaleString('en-IN'))




//==============maths=============================

console.log(Math)
console.log(Math.abs(-3)) // round, ceil, floor, min, max, rondom
//Math.rondom - gives random number betwenn  0-1
console.log((Math.random()*10)+1)//to avoid 0 
const min = 3 
const max = 5
console.log(Math.floor(Math.random()*(max-min+1))+min)