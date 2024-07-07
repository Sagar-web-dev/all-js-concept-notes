// generat erandom background color
//all expalnation for me += is use to constantly add the value under the variable
let randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
       color +=   hex[Math.floor(Math.random()*16)];
       
    }
    return color
}

console.log(randomColor());

let intervalId;

const startChangingColor = function(){
if (!intervalId) {
    
    intervalId = setInterval(changeBackgrounColor,2000)
}
    function changeBackgrounColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
   clearInterval(intervalId);
   intervalId = null;

}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);





// const startChangingColor = function(){

//     let intervalId = setInterval(changeBackgrounColor,2000)
//     function changeBackgrounColor(){
//         document.body.style.backgroundColor = randomColor();
//     }
// }

// const stopChangingColor = function(){
//    clearInterval(intervalId)

// }     here the error is come that the intervalId is not defined because of the scope dependency
// so the we have to declare the intervalId in global scope



// 2nd note 
// let intervalId;

// const startChangingColor = function(){
// if (!intervalId) {
    
//     intervalId = setInterval(changeBackgrounColor,2000)
// }

// // by writing this we write the clean code or we said the code written in a professional way
// i learn in thi project go one by one step and apply your all knowledge