// about the object litral
const user = {
    username: 'sagar',
    loginCount:9,
    signedIn: true,


    getUserDetail: function(){
        // console.log('Got user detail from the database');
        // console.log(`Username : ${this.username}`);    // error come that the username is not defined because of the current context so for solve this we have to write the this
    
       console.log(this);
    
    }
}


// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


// ______________________----------------------------------------------------

// Constructor function is basically give the new instances it does not change the original code so 
// her we learn the important of the new and the this keyword


function User(username,loginCount,isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

this.greeting = function(){
    console.log(`Welcome ${this.username}`);
}

    return this;
}

const userOne = new User('sagar',12,true);
const usertwo = new User('gagar',16,false);   // her the userTwo overwrite the value on userone so in this way the new keyword come to action
console.log(userOne.constructor);
// console.log(usertwo);

// 1- step - when we use the new keyword firstly the new empty {} object create hota hai  jisko instance kaha jata hai 
// 2nd - step - constructor function call hota hai new keyword ke karan ye argument ko pack kart hai phir hame de deta hai
// 3rd - step- jo apna this keyword hai usme argument inject ho jate hai 
// 4th - step - hame mil jate hai function ke under jaoise hame mile hai

// so ham uske under method bhi likh skte hai

// jo constructor property wahi hoti hai jo refrence deti hai hame khudi ke bare me
