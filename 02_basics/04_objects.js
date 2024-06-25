// const tinderUser = new Object();   //  its a single ton object hai

const tinderUser = {}   // its a non singleton object

tinderUser.id  = "123eac"
tinderUser.name = "sagar"
tinderUser.isLoggedIn = "false"


// console.log(tinderUser);


const regularUser = {
    email:"sdfg@gmail.com",
    fullname:{
        username:{
            firstname:"sagar",
            lastname : "Rahangdale"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);  // in this way we access the value from the object 


// for joining tyhe object 

const obj1 = {1:"a",  2:"b"}
const obj2 = {3:"a",  4:"b"}

// const obj3 = {obj1, obj2}   // 1st option not good

// const obj3  = Object.assign(obj1,obj2)   // 2nd option   

const obj3 = {...obj1,...obj2}  // 3rd option better way to do this 
// console.log(obj3);


// access usse when we work on the database

const users = [
    {
        id:1,
        email:"sdfghg@gmail.com"

    },
    {
        id:1,
        email:"sdfghg@gmail.com"

    },
    {
        id:1,
        email:"sdfghg@gmail.com"

    },
]

users[1].email;



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(users);


// +++++++++++++++++++++++++++++++++++++++++++ new lecture start ++++++++++++++++++++++++++++


const course = {
    courseName:"js in hindi",
    price: "999",
    counrseInstructor:"Hitesh"
}

// for accessing this value

// normal method

// course.counrseInstructor;
// console.log(course);


// beeteer wwy to access the value and learn the destrcturing

const {counrseInstructor: sagar} = course;   // {} curly braces means the destructuring

// console.log(counrseInstructor);   //we are able to changing the name also 
console.log(sagar);
