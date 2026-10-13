// Two ways to declare objects - 1. Literals   2.Constructor
// Singleton - when constructor declare is only one to build
// Object literals to declare object 
// Object.create

const JsUser = {
    name: "Sunam",
    "full"
    age: 23,
    location: "Shilong",
    email: "sunam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Wednessday", "Saturday"]
}

console.log(JsUser.isLoggedIn);
console.log(JsUser["email"]);