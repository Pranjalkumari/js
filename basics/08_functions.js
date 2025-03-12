// function add(num1, num2){//parameters
//   return num1+num2
// }
// console.log(add(1,2))//arguments
// console.log(add(2,'a'))

// const res = add(1,2)
// console.log(res)



// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("sa"))


// function calculate(val1, val2, ...num1)
// {
//     return num1
// }

// console.log(calculate(2,3,4,5,))







const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// // handleObject(user)
handleObject({
    username: "sam",
    price: 399
})





// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

