// const coding = ["js","c++","python","java","c"];


// const values = coding.forEach((item)=>{
//        console.log(item);
//        return item;
// });

// console.log(values);

// the error come undefined so means foreach kabhi kuch rfeturn nhi karta hai  




// -----------------------------------------------------------------------------

// filter


const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter((val)=> val>8) ;   // her to write the return not compulsory  

// const newNums = nums.filter( (val) => {
//       return val>7;
// } )   // here give the error if we dont write the return because the braces open than its compulsory to write the retun to get output



// const newNums = [];

// nums.forEach((val )=>{
// if (val>5) {
//      newNums.push(val)
// }
// });
// console.log(newNums);



// -----------------------------------------------------------------
// Map


const muNumbers = [1,2,3,4,5,6,7,8,9,10];

// Chaining called where we use multiple methid
// const mumNumbers = muNumbers.map((num)=> {return num + 1});

const mumNumbers = muNumbers
.map((num)=> num * 20)
.map((num) => num + 1)
.filter((num)=> num >= 50);


// console.log(mumNumbers);


// ---------------------------------------------------------------

// Reduce

const sagar = [1,2,3,4];

// const cp = sagar.reduce(function(acc, currval){
//     console.log(`acc value: ${acc} and currval value: ${currval}`);
//     return acc + currval;
// },0);

// ----------------------------------------------------------

// reduce me hame start value dena pdta hai for ex we give 0 in above and below reduce function
const cp = sagar.reduce((acc,currval)=> acc + currval,0 )
console.log(cp);


// -----------------------------------------------------------

// applying on Object

const shoppingCart =    [
    {
        itemName : "car",
        price: 99999
    },
    {
        itemName : "bike",
        price:4567890
    },
    {
        itemName : "taxi",
        price:234567890
    },
    {
        itemName : "Thar",
        price: 44
    }
];


 const dealer = shoppingCart.reduce((acc,item)=> acc + item.price, 0);
 console.log(dealer);



//  ------------------------------------------------------------------------------------------------------------



// ---------------------------------------- COMPLETED 1ST PART OF JS ON 28/6/24---------------------------