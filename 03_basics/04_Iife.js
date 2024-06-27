// Immediately Invoked Function Expression (IIFE)   syntax (function rap)()
// IIFE is used to invoked the function immediately and use to save from the global scope polution  



//normal function
// function chai(){
//     console.log(`Db connected`);
// }
// chai();

// ------------------------------------------------------------------

// IIfe function 
(function chai(){
    // named iife hai
    console.log(`Db connected`);
})();


(() => {
    // normal iife  intervieew question
    console.log(`Db connected`);
})() ;    // it gives error because iife invoked to ho jata hai but isse nhi pta ki end kaha hona hai so that above function ko hame end karna pdega ; se


// --------------------------------------------------------------

// here we learn how two we pass the value


  // argument
((name)=>{
    console.log(`db connected two ${name}`);
})("sagar")   // parameter
