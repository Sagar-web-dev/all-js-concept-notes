//how to data put on the memory and the access from that 

//primitive datatypes

//  7 type String , Number , null,boolean , undefined , symbol,bigint
//inko hame copy kar ke diya jata hai na ki original data if u change anything than it change on the copy data


let score = 123;
let scoreValue = 123.345;
let isLoggedIn = false;
let outsideTemp = null;
let userEmail;


const id = Symbol('212');
const anotherId = Symbol('212'); // suymbol me hamesa value different hoti hai

console.log(id === anotherId);

// let bigNumber = 123456789000000n;  // by n applying ye bigint ban jata hai

// Reference datatype (non - primitive)

// array,  objects , functions 

const heros = ["sagar", "hanuman"];
let myObj = {
    name: "sagar",
    age:35
}


const myFUnction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber); // type value is different of datatype so check it read about them