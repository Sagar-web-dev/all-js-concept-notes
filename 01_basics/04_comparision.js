// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


 console.log(null>0);
 console.log(null==0);
 console.log(null>=0);  
 // value conversion problem aata hai to result predictable nhi aa ta hai

//  the reason behind is that equality check == and comparision < > >= <= work differently. 
// comparision convert null to a number , treating as 0.
// thats why (3) null>= 0 is true and (1) null>0 is false


// ==== strict check 
console.log("2" === 2);   
// its check the value as well the datatypes
