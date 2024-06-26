function  reUsable(){
    console.log("S");
console.log("A");
console.log("G");
console.log("A");
console.log("R");
}

// reUsable();
                        // parameter
function addNumber(number1,number2){
    console.log(number1+number2);
}

// addNumber(3,4);   // argument
// addNumber(3,"7")
// addNumber(3,"a")


// const result = addNumber(3,"a");
// console.log(result);    // output undefined so thats a wrong thing to save the variable


// function addNumber(number1,number2){       // one way to save 
//     let result = number1+number2
       
//     return result;
     // console.log("sagar");    // afetr return the code is not execute but the code written above the return so the code run and give output

// }

// const result = addNumber(3,7)
// console.log("Result:", result);



function addNumber(number1,number2){
   return number1 + number2
}


// if we return the anything so we have to save it in the variable
//    const output = addNumber(3,9);

//    console.log(output);


function logInuser(username){
    if (username === undefined) {
        console.log("please enter the username");
        return
    }
        return `${username} just loggedin` // if hame isse print nhi karani hai than we use the return in above so it break the  below side
}

// console.log(logInuser("hitesh"));
// console.log(logInuser(""));
// console.log(logInuser());   // it give us undefined so for that we use the if else condition




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===new video ++++++++++++++++++++++++++++++++++++++++++++++

                             //... is now act as the rest operator  it help to collect all the parameter and give us the array
                             // spread and rest operatot are the same but differ from the functionality
function calculateCartPrice(val1,val2 , ...num1) {
       return num1
}

// console.log(calculateCartPrice(23,45,88,99,66,55));


const user ={
    username:"Sagar",
    price:"999"
}

function handleObject(anyObject) {
         console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user);   // ist method
// handleObject({
//     username:"ram",
//     price:"2345"
// })    // in this way we also pass the object under the function or access the object



// console.log(typeof handleObject);





const newArray = [200,300,400,600];

function returnSecondvalue(getarray){
        return getarray[1];
}

// console.log(returnSecondvalue(newArray));   // 1st method

console.log(returnSecondvalue([200,3000,88,777]));