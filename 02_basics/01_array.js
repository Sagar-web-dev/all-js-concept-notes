// array


const myArr = [1 , 2,3,4 ,5];

const heroArr = ["shaktiman", "sagar"];

const arr = new Array(1,2,3,4);

// console.log(arr);
// console.log(myArr);
// console.log(myArr[3]);

// array methods


// myArr.push(9);   it help to push the element intu the array
// myArr.pop();    it remove the element from the array

// myArr.unshift(7);    //unshift add the  element into the first place of the array
// myArr.shift();   // shift remove that element from that array



// console.log(myArr.includes(88));   // this are help for the questioning
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(4));



// const newArr = myArr.join();   // join apne array ko bind bhi kar diya and string me convert bhi kar diya hai
// console.log(typeof newArr);
// console.log(newArr);
// console.log(myArr);



// Slice and splice

console.log("A" , myArr);


const myn1 = myArr.slice(1,3);
console.log("B", myn1);

const myn2 = myArr.splice(1,3);

console.log("c", myn2);
console.log("original array" , myArr);

// the majaor diff between the slice and the splice is splice change the original array     

