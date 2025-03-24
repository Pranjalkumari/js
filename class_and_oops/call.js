function setUsername(username)
{
    this.username = username ;
    console.log('called');
    
}

function create(username, email){
    setUsername(username)// called but does not hold username reference 
    setUsername.call(this,username)//The .call() method in JavaScript allows us to invoke a
    //  function while explicitly setting the this value and passing arguments individually.

    //.call() as transferring execution to another function while explicitly setting this.
    //  It does not pause or halt execution but immediately invokes the function with a new this context.
    this.email = email
}

const a = new create("pk", 'kumari');
console.log(a);
