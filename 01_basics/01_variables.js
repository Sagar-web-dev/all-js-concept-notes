// console.log("sagar");

const accountId = 112345;
let accountEmail = "sagar123@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";


// accountId = 2; // not allowed

// prefer not to use var
// because of issue in block scope and functional scope

accountEmail = "asd@.com";
accountPassword = "123452345678";
accountCity = "balaghat";


console.log(accountId);

console.table([accountEmail,accountId,accountPassword]);