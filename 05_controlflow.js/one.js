// if 
const isloggedIn = true;
const temperature  = 40;


// if (temperature <50) {
//     console.log("temperature less than 50");
// } else{
//     console.log("temperature more than 50");
// }
  
// console.log("execute") ;    // here drawback is this console is run because it is in global for that we use the else


// some comparision operator

// < , > , <= , => , != , == , === , !==
  
// --------------------------------------------------------------------------

const score = 2000;

// if (score> 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(power);     // here the error come that power is not defined reason behind it is {} block scope so from outside we cannot access only possible when we use var


// ------------------------------------------------------------------------

const balance = 9999;
// if (balance < 999) console.log("true"), console.log("false");   // wrong approach 

// nested condition

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 700");

// }else if(balance<950){
//     console.log("less than 950");

// } else{
//     console.log( "less than 10000");
// }


const userloggedIN = true;
const debited = true;
const isloggedInfromGoogle = false;
const isloggedInfromEmail = true;

if (userloggedIN && debited == true) {
    console.log("Allow to buy course");
}

if (isloggedInfromGoogle || isloggedInfromEmail) {
    console.log("user logged in");
}
