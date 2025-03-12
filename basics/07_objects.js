//Objects can be created using the Object() constructor or the object initializer / literal syntax.
// singleton-> Object.create

// object literals

const sym = Symbol("key")

const info ={
    name: "pranjal", // take name as a string
    age: 21,
    student: true,
    [sym]: "key"
}
// //console.log(info)
// console.log(info.name)
// console.log(info["name"])

// info.greeting = function(){
//     console.log("Hello JS user");
// }
// info.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(info.greeting());
// console.log(info.greetingTwo());





//=======================object.create==================

// const instauser = new Object()
// instauser.id = '123a'
// instauser.name = "pk"
// instauser.isLoggedin = false
// console.log(instauser)


//nasted
// const info = {
//     name: "pk",
//     fullname:{
//         username:{
//             firstname:"pranjal",
//             lastname:"kumari"
//         }
//     }
// }
// console.log(info.fullname.username.firstname)





// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}// spread than concanate
// console.log(obj3);




const users = [
    
    {
        id: 1,
        email: "kjkj.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)// only two ibjects so, take 0,1 


console.log(Object.keys(info));
console.log(Object.values(info));
console.log(Object.entries(info));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



//==============api====================
[
    {},
    {},
    {}
]