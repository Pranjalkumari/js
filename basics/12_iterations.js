//forof- give value

// const arr =['1','2','3']
// for (const num of arr) {
//     console.log(num);
// }
//same for strings
// const map = new Map()
// map.set('1',34)
// map.set('2',12)
// map.set('3',56)
// console.log(map)

// for (const [key,value] of map){
//     console.log(key, '-',value)
    
// }

//can  not iterate object by forof   , use forin

const myObj = {
    name:"harry",
    age:34
}
// for (const num of myObj)
// { 
//     console.log(num)
    
// }

//use forin- give key
// for (const key in myObj){ 

//     console.log(key)
// }

//but can not iterate map by forin - does not have key values



//---------foreach-------------
const dress = ["pant", "skirt" , "top"]
dress.forEach(element => {
    console.log(element)
});

//function
dress.forEach(function(item){// does not write name of the funtion
    console.log(item);
})

//arrow function
dress.forEach((item)=>{
    console.log(item);
})

//coding.forEach( (item, index, arr)=> {// also pass the index and array in parameter
    //     console.log(item, index, arr);
    // } )



//======================access object by foreach===================
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )