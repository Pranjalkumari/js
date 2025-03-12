//var c =4;
let a = 3;
if(true)
{
   
  var c = 78;// not good ,declare locally but can be access globally 
}
console.log(a)
console.log(c)


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // if assign varible than we can not access before the fumction
    return num + 2
}