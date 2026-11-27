// if
//if(condition)
// if (true) then execte the code and if (false) then dont execute the code
// // < , >, <=, >= 
// == (check equal)
// != (negative statement, checkif not equals to)
// === (check equals and also check the type)

if( 2 === "2" ) {
    console.log("executed");
}
// if( 2 != 3 ) {
//     console.log("true")
// }

// const temperature= 41
// if( temperature === 41 ) {
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score= 200

// if(score > 100) {
//     let power ="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//*********************************************Short-Hand-Notation*****************************************

const balance= 1000

// if(balance > 500) console.log("test"),       // splicit scope
// console.log("test2");                        // immature way, not an ideal way to write code

// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn= true
const debitCard= true
const userLoggedInFromGoogle= true
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3) {                              // && = AND
    console.log("Allow to buy course");
}
if(userLoggedInFromGoogle || userLoggedInFromEmail) {                // || = OR
    console.log("user logged in");
}