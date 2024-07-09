class User {
    constructor(username){
        this.username = username;
    }

    logMe(){     // this is called the method
        console.log(`Username is ${this.username}`);
    }

     static createId(){
        return '123';
    }
}

const sagar = new User("sagar");
// console.log(sagar.createId());  // without write the static in front of the createId so this id access by all parent and child to stop that we have to use the static


class Teacher extends User{
    constructor(username, email){
    super(username);
    this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com");
console.log(iphone);
console.log(iphone.createId());  // due to use of static we are not able to access the createId 
