let username = "sagar";

// if (username) {
//     console.log("username availble");
// } else {
//     console.log("username not available");
// }


//  falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


//truthy values

// "0" , 'false', "" ,  [],{}, function(){}


// for checking


let name = [];
if (name.length === 0) {
    console.log("Array is empty");
};

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
    
}



// ---------------------------------------- pause 7.000



// Nullish Coalishing Operator (??) : null undefined
// it specially design for the nul and unndefined

let val1;
// val1 = 6??9;
// val1 = null ?? 77;
// val1 = null ?? undefined;
// val1 = undefined ?? 5678;
val1 = null ?? 10??66;   // here it take 1st value afetr the null




console.log(val1);


// ------------------------------------------------------------

// ternary operator

// condition ? true : false

const iceTeaprice = 100;

iceTeaprice <= 80 ?  console.log("less than 80"): console.log("more than 80");









