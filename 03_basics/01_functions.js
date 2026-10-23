

function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}
// sayMyName(); 

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(3, null);

const result = addTwoNumbers(3, 8)
// console.log("Result: ", result);

// === means isequals to 
// != means is not equals to.....it convert true into false and false into true
// " " empty string is consider as false value 

// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("Please enter your username");
//         return;
//     } 
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter your username");
        return;
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anisha"));
// console.log(loginUserMessage("popi"));

// For big calculation like shopping cart
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 900, 700, 1000, 100));

const user = {
    username: "kalia",
    price: "4000"
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({});

handleObject({
    username: "rohan",
    price: 3020
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 1000]));