// let myName = "sagar      ";
// let myChannel = "chai           ";

// // console.log(myName.trim().length);    // normal way 
// console.log(myName.trueLength);   // haem method chaiye ()


let myHeroes = ["superman","hanuman"];


let herosPower = {
    thor  : 'hammer',
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(` Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects `);
};

Array.prototype.hiteshHero = function(){
    console.log(`hitesh speak array `);
}



// myHeroes.hitesh();
// herosPower.hitesh();
// myHeroes.hiteshHero();
// herosPower.hiteshHero();   // this show the error


// ---------------------------------------------------------------------------===========



// INheritence


//old syntax
const user = {
    name:"sagar",
    email : "sagar@gmail.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}


const TAsupport = {
    makeAssignment: 'Js project',
    fullTime: true,
    __proto__ : TeachingSupport 
}


Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);


// ------------------------------------------------------------------------


let anotherUser = "Chai aur Code";


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(` True length is ${this.trim().length}`);
}

anotherUser.trueLength();
"Sagar ".trueLength();

"Rahangdale              ".trueLength();
