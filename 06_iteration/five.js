// for Each loop

const coding = ["js","c++","python","java","c"];


// coding.forEach(function(val){
//     console.log(val);
// });



// coding.forEach((mean)=>{
//    console.log(mean);
// });

coding.forEach(printMe);   // ham aise outer me function bna kar call bhi kar skte hai

function printMe(item) {
    // console.log(item);
}


coding.forEach((item,index,arr)=>{
    console.log(item,index, arr);
});


// so foreach ke under hame parameter me item , index,fiull array ka bhi access milta jo bahut useful hota kuch specific perform karne ke liye


const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
];

myCoding.forEach((item)=>{
      console.log(item.languageName);
});

// so from above example we understand how the foreach loop work effiently anf make our work easy