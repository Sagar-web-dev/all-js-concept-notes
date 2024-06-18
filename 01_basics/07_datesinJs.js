// dates

let myDate = new Date();

// console.log(myDate);   // it not give in the readdable formate for that we use the other method like
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleString());

let myCreateddate = new Date(2023, 9 , 2);
// let myCreateddate = new Date(2023, 0 , 23, 5,3);   // in date month start with the 0
// let myCreateddate = new Date("01-14-2023")
// console.log(myCreateddate);
// console.log(myCreateddate.toString());
// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);  //output come in mili second
// console.log(myCreateddate.getTime());    //output come in mili second


// for to convert second we use some logic and the math 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",


})


