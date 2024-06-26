// let a = 10;      // this one global scope
// const b = 20;
// var c = 30;

{}   // named as scope

let a = 3000;
if (true) {
    let a = 10;   // it give undefined which is best quality
const b = 20;     // same for const
// var c = 30;      // but var give the output result if ke under written block scope hai 
// console.log("inner if value of a remains same " , a);
}


// console.log(a);
// console.log(b);
// console.log(c);



// nested scope understanding

function one(){
    const username = "sagar";

    function two(){
        const website = "youtube";
        // console.log(username);

    }
    // console.log(website);   // 1st error website is not defined beacuse we use website outside the scope 

    two();
}

one();


// understanding scope with the help of nested if else

if (true) {
     const username = "sagar";
     if (true) {
        const lastname ="Rahangdale";
        // console.log(username + lastname);
     }
    //  console.log(lastname);   // 1st error because we access it outside the scope  


}

 // by commenting we remove the error and do more practice


// console.log(username);   // next 2nd error same reason



// _____________--------------------------- Intresting ___________--------------------+++++++++++++++++++++++
console.log(addOne(23));   // in 1st method of function we access the function but in 2nd method we can not access the function before initialization

function addOne(num1){
    return num1 + 1;
}


addOne(5)
// console.log(addOne(4));   // it return the value but for print we have to console 1st

// 2nd method of declare variable

const addTwo = function(num1 ){
    return num1 + 2;
} 

addTwo(8)
console.log(addTwo(9));