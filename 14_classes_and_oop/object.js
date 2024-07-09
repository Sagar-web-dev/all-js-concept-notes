                           
                           
                //  function-----------
                                // |
            //  Array ----------     object -------------- null
                                //  |
            //    string------------

    //  so commonly we said that in the javaScript everything is behave like a object {} in most of the cases
//    javaScript follow the prototypal inheritence means ye haar nhi manti hai check karti in depth tak jakar jabtak issse null na mil jaye

function multipleBy5(num){
   return num*5;
}
multipleBy5.power = 5;
 
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


// ----------------------------------------------

function createUser(username,score){
    this.username = username;      // this is use to access the current context
    this.score = score;
}

createUser.prototype.increament = function(){   // these called the method
    this.score++    // this means jisne bhi bulaya uska kaam karo phle 
}


createUser.prototype.printMe = function(){
    console.log(`price of tea ${this.score }`);
}

const chai = new createUser('chai', 10);   // here we do not see anything because we cannot write the new keyword   this new tell us what we have to do or what we get the new property
const tea = new createUser('tea',209);


chai.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



