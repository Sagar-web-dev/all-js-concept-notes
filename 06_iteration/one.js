// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 7){
        // console.log("7 thala for a reason");
    }
    // console.log(element);
}


// console.log(element);   //  error show element is not definenot possible to access element from the block sscope

// ---------------------------------------------------------

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    //    console.log(i + '*' + j + '=' + i*j );
        
    }
    
}



// --------------------------------------------------------------------------------


// let myArray = ["Superman","Shaktiman","Hanuman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// --------------------------------------------------------------------------

// Break and countinue



// here break is use to exit out of the loop of for checking the condition
// for(let index = 1 ; index <= 30; index++){
//     if(index === 9){
//         console.log("Detected 9");
//         break;
//     }
//     console.log(`Value of i: ${index}`);
// }

// ----------------------------------------------------------------------

for(let index = 1 ; index <= 30; index++){
    if(index === 9){
        console.log("Detected 9");
        continue;
    }
    console.log(`Value of i: ${index}`);
}



