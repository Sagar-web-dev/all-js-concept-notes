// es6

class User {
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
        encryptPassword() {
            return `${this.password}abc`
        
}
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","qwer@gmail.com", "1233");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());





// behind the Scene  or when the class in not introduce

function Users(username,email,password){
    this.username = username;
        this.email = email;
        this.password = password;
}


Users.prototype.strongPassword = function(){
     return `${this.password}abc`
}


Users.prototype.strongUsername = function(){
    return `${this.username.toUpperCase()}`
}



const tea = new Users("tea", "tea@gmail.com","12323456");

console.log(tea.strongPassword());
console.log(tea.strongUsername());
