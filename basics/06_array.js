//=================read documentation======================
const arr = [2,4,5]


//console.log(arr.includes(4))
// splice and slice

console.log(arr.slice(1,2))
console.log(arr.splice(1,2))// also manipulate the original array
console.log(arr)


console.log(Array.from("hii"))

console.log(Array.from({name:"hii"}))// if not able to create an array gives empty array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
