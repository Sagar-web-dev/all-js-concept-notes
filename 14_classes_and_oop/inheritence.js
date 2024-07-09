class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{                      // here extends keyword is use class in previous we use the prototype
    constructor(username,email,password){
        super(username)     // username ke liye phle hame .call use karna pdta phir this pass karna pdta ab class me hame direct super likh kar ham username ko access kar skte hai
        this.email = email;
        this.password = password
    }

    addCourse(){
      console.log(`A new course add by ${this.username}`);
    }
}

const chai = new Teacher("sujal","sujal@12gmail.com","0987");
chai.addCourse();
// console.log(chai);

const masalaChai = new User("ram");
masalaChai.logMe()
// masalaChai.addCourse();   // this give the error because masalaChai has not the access of the function addCourse()


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);