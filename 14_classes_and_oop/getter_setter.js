class User{
    constructor(email,password){
        this.email = email;
        this.password = password;

    }
     
get email(){    // geter lgane se ye method ban jate hai
     return this._email.toUpperCase();
}

set email(value){
    this._email = value;
}

    get password(){
        return `${this._password}sagar`   // getter me kuch na kuch bhejna pdta hai
    }

    set password(value){
        this._password = value    // setter ko kabhi bhi value return nhi karte hai
    }
}

const sagar = new User("sagar@123gmail.com","123");
console.log(sagar);
console.log(sagar.password);
console.log(sagar.email);