const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');

// console.log(descriptor);
// Math.PI = 5;    // here we are not able to edit the value of the pi 
// console.log(Math.PI);


const chai = {
    name:'ginger tea',
    price: 300,
    isAvailable: true,


    orderChai: function(){
        console.log("Chai nahi bani");
    }
}


// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai , "name"));   // here it give the undefined because we  apply it only the property so we have to give the property

// so we are able to change the property of object q ki hamne bnaya hai

// Object.defineProperty(chai, 'name',{
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// so now we change the property of the object chai name


// for (const [key , value] of chai) {
//     console.log(`${key}, and ${value}`);
// }   // it give the error  chai is not iterable

// for (const [key , value] of Object.entries(chai)) {
//     console.log(`${key}, : ${value}`);
// } //name, : ginger tea   ye uper wale ka output hai so for this hame condition or check lgana pdega
// price, : 300
// isAvailable, : true
// orderChai, : function(){
//         console.log("Chai nahi bani");
//     }




for (const [key , value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        
        console.log(`${key}, : ${value}`);
    }
}

