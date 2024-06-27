const user = {
    username:"Sagar",
    price:"99",



    welcomeUser : function(username){
        console.log(`${this.username}  ,  welcome to the github`);      // this is used for the or here use as curent context and use to access the value under the {} or scope
       console.log(this);
    }
}

// user.welcomeUser   // so welcome user method hai to hamme () ye lagana pdega
// user.welcomeUser();
// user.username = "cp";   // here we change the value of the inner context or here inner contex break
// user.welcomeUser();


// console.log(this);   // here this value is empty object because global context is empty 
// but for same the value of the this is on browser is window so the value of this is differ



// ----------------------------------------------------------------------------------------------------------------------

// function sagar(){
//     console.log(this);   // so this conatin many value
// }

// sagar();


// ----------------------------------------------------------------------------------------------------------------
// function sagar(){
//    let username = "ram";
//     console.log(this.username);
// }

// sagar();

//here we cannnot acces the value of the username it give us the undefined it or  this work on the object but not in the function



// -------------------------------------------------------------------------------------------------------------------------
//  const sagar = function(){
//    let username = "ram";
//     console.log(this.username);
// }

// sagar();


//  above function only for the differ declaration of the function

// ------------------------------------------------   arrow function----------------------------------------------------------------------------------

const chai = ()=>{
      let  username = "gagar";
    //   console.log(this.username);
    // console.log(this);     // it givse us the empty object
}
chai();
// --------------------------------------------------------------------------------------------------------------------


//        basic fat arrow function
// const arrow = (num1 , num2) =>{
//     return num1 + num2;       // here it callled the explicit return 
// }


// console.log(arrow(3,8));

// --------------------------------------------------------------------------------------------------------


// const arrow = (num1 , num2) => num1 + num2;    // one liner code is called immplicit return 
// const arrow = (num1 , num2) => (num1 + num2);  // here rap this into the parenthesis so we have not written to return but when we apply curly braces than we have to something return


// for object declaration

// const arrow = ()=> {username: "saagar"}   // it give us undefined so for solve it we have to rap this intu the () parenthesis
const arrow = ()=> ({username: "saagar"});

console.log(arrow(3,8));