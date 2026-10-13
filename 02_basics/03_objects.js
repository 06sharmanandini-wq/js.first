// Two ways to declare objects - 1. Literals   2.Constructor
// Singleton - when constructor declare is only one to build
// Object literals to declare object 
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Sunam",
    "full-name": "Sunam Jyotishi",
    [mySym]: "mykey1",                             // for use it as symbol we need to put it in [] brackets
    age: 23,
    location: "Shilong",
    email: "sunam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Wednessday", "Saturday"]
}

//console.log(JsUser.isLoggedIn);
//console.log(JsUser["email"]);
//console.log(JsUser["full-name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.m);

// console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]);

JsUser.email = "sunamjyotishi@gmail.com"     // can change the value inside object JsUser 
//console.log(JsUser.email);
// Object.freeze(JsUser);

// JsUser.name = "Json"
//console.log(JsUser.name);

JsUser.age = 22
// console.log(JsUser.age);

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)        // to refer something inside the object should use (this.name)
}


console.log(JsUser.greeting());
console.log(JsUser.greeting);

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());