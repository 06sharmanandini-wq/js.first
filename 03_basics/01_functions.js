

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


function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter your username");
        return;
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anisha"));
console.log(loginUserMessage());