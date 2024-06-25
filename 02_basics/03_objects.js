// singleton
//object.create


//object literals

const mySym = Symbol("key1");
 
const JsUser = {
    name: "Hitesh", 
    "full name":"sagar Rahngdale",
    age: 18,
    [mySym]:"myKey1",
    location: "Jaipur",
    email: "sagar1234@gmail.com",
    isloggedTn: false,
    lastlogubndays:["monday","saturday"],
}

// console.log(JsUser.email);  //one way to access of the value from the object
// console.log(JsUser["email"]);  
 // second way to access the value from the object because by default name = pretend like  "name" string so above method is very usefulfor that
//  console.log(JsUser["full name"]);  // this is right but jsuser.full name is wrong
//  console.log(JsUser.mySym);  // it wrong approach it give us string but we want a symbol
//  console.log(typeof JsUser.mySym);

//  console.log(JsUser[mySym]);  // right approach to get the symbol or to declare 


//  JsUser.email = "rahangdale@gmail.com";   // for overwrite the value of the object
// Object.freeze(JsUser);    // use for freeze the value of the object and further step also
JsUser.email = "ram@123gmail.comm"
//  console.log(JsUser);

 JsUser.greeting = function(){
    console.log("hello js maker");
 }


 JsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);   // this is used to access the property of the sae object
 }

 console.log(JsUser.greeting());   // () this bracket is neccessary
 console.log(JsUser.greeting2());

