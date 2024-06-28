const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"

}

for (const key in myObject) {
   // console.log(`${key} shirtcut for ${myObject[key]}`);
 
};


const myArray = ["1","2",'3','4']
for (const key in myArray) {
   // console.log(myArray[key]);
    
};








const map = new Map();

map.set('In','India');
map.set('USA','United State of America');
map.set('Fr','France');
map.set('In','India');


for (const key in map) {
   console.log(key);
}
  // it gives error ki map me iteration nhi kar skte

