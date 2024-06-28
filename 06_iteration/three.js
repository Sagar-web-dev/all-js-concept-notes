// for of

// ["","",""];
// [{},{},{}];

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello Sagar";
for (const greet of greetings) {
    // console.log(`Each char ${greet}`);
}


// -------------------------------------------------------------------

// maps

const map = new Map();

map.set('In','India');
map.set('USA','United State of America');
map.set('Fr','France');
map.set('In','India');

// console.log(map);    // map give us unique value repetition of value is avoided in the map

for (const [key , value] of map) {
    //    console.log(`key,'+:`, value);
};


const myObject = {
    game1: 'pubg',
    gam2: 'car'
}
for (const [key , value] of myObject) {
       console.log(`key,'+:`, value);
}

// error come that object is not iterable there is other method t iterate object 

