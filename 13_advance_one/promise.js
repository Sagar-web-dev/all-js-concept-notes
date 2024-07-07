// promise are basically the work is done but when time is not decided
// to connect the .then and resolve so we have to call the resolve() method 
const promiseONe = new Promise(function(resolve,reject){
        // Do an async task
        // DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task1');
        resolve()
    },1000)
})

promiseONe.then(function(){
    console.log('Promise consumed');
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise consumed task2');
});




// so in this promise we learn how to we get the data from the resolve and learn how the data consumtion work or the connectivity
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'sagar', email:'sagar@gmail.com'});   // yaha hum object ya array kuch bhi le skte hai
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:'Ram',email:'ram@123gmail.com'});
        }else{
            reject('Error: Somethig went wrong')
        }
    },1000)
});

promiseFour.then(function(user){
       console.log(user);
       return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'));


// this is how promise work and the chaining of the .then and .catch work and we get the specific data we put the data name different






const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username:'JavaScrip',email:'12323'});
        }else{
            reject('Error: js went wrong')
        }
    },1000)
});


async function consumePromisefive() {
    try {
        
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive();




async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()   // here if we forget to write the await so our code not run because that line take the time so we have to write await
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// so we learn the async await ke try and catch 
// and .then() and .catch() and fetch api and change data into the json format 
// and the chaining of the .then
