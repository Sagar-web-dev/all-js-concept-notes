 const User ={
    _email :"sagart@123sagar.com",
    _password: "asdfdsdsdfdsf",

    get email(){
return this._email.toUpperCase();
    },
    set email(vlaue){
          this._email = vlaue
    }

    
 }

 const tea = Object.create(User);
 console.log(tea.email);