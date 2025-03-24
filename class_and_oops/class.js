// class user{
//     create(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password =password
//     }

//     encryptpass()
//     {
//         return `${this.username}abc`
//     }
// }

// const a = new user("pk", '123', '00')
// console.log(a.encryptpass());



//behind the scene 

function User(username, email, password)

{
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encry = function(){
    return `${this.password}`
}

const b = new User('pk', 'example','123')
console.log(b.encry());
