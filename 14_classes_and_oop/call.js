function SetUsername(username){
    this.username = username;
    console.log("called");
}


function createUser(username , email , password){
     SetUsername.call(this, username);     
    
    this.email = email;
    this.password = password;
}


const chai =new createUser('sagar', "sagah@123gmail.com", "123");

console.log(chai);



// SetUsername(username);  // this line give call to ho raha but hame username ki value nhi mil rahi 
// SetUsername.call( username);     // .call ka use karne par bhi hame username ki value nhi mil rahi vo refrence to le raha but value hold nahi kar pa raha so that problem solved by the this keyword jo ye this hai vo hamare this hai 
// so jo purana this hai uski valuse gayab ho jayengi but vo hamare this ko paassed ho jayengi gayab hone se phli aise ham access le pa rahe  
