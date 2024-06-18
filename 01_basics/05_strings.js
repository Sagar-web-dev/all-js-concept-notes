const name = "sagar";
const repoCount = 50;

// avoid old syntax

// console.log(name + repoCount + "value");


// instead of old syntax use new syntax which was more convenient

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  its a right way to strings by using backtick

const  gameName = new String('sagar-is-the');


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(2));
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-3,4);
console.log(anotherString);

const newStringOne = "          Sagar              ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sagar.com/sagar%20rahangdale";

console.log(url.replace('%20','-'));

console.log(url.includes('sagar'));
console.log(url.includes('ram'));



//prototyping use all the call and use all the methods and try the and perform on string


