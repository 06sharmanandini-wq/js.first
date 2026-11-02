const user = {
    username: "williams",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to the website`)
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "tiria"
// user.welcomeMessage()
// console.log(this);


// function chai() {
//     let username = "sangam"                      // only working under objects and this is not work under function
//     console.log(this)
// }
// chai()

// const chai = function code() {
//     let username = "preeti"
//     console.log(this.username);
// }

const chai = () => {                               // This is arrow function
    let username = "preeti"
    console.log(this);
}

//chai()



() => {}                                       // This is purley arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2                         // if {} then need to write return
// }

// const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2)      // if () then not need to write return

const addTwo = (num1, num2) => ({username: "judyhops"})    

console.log(addTwo(3, 9));


//const myArray = [2, 5, 6, 7, 9]

// myArray.forEach()