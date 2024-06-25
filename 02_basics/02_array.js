// more about the array 

const marvalHeroes = ["Ironman","Spiderman", "Thor"];
const dcHeros = ["Superman", "Flash","Batman"];

// console.log(marvalHeroes);
// console.log(dcHeros);


// for joinig we use push method but it is not a right way to do it contain the array under the array

// marvalHeroes.push(dcHeros);
// console.log(marvalHeroes);
// console.log(marvalHeroes[3][1]);  // this is how we access the value when we push the array under the array


// other method

// marvalHeroes.concat(dcHeros);
// console.log(marvalHeroes);    // it direct not work so we have to use another variable


//   const allHero = marvalHeroes.concat(dcHeros);
// console.log(allHero);


// another easy method so we use the spread operator

// const sagar = [...marvalHeroes , ...dcHeros];
// console.log(sagar);


// this is use to simplify the array we use flat so play with the method and apply on the array and learn thing 
// const anotherArr = [1,2,3 ,[4,5],6,7 , [6,7,8, [8,9,10]]];

// const real_anotherarry = anotherArr.flat(Infinity);
// console.log(real_anotherarry);



// console.log(Array.isArray("Hitesh"));  //so output say its not a array;

// console.log(Array.from("Hitesh"));  // from help to convert the anything into the array like object , string etc

// console.log(Array.from( { name:"Hitesh"}));   // interesting case 

let score1 = 123;
let score2 = 4567;
let score3 = 890;

console.log(Array.of(score1,score2,score3));


