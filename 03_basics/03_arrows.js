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
console.log(this);


function chai() {
    let username = "sangam"                      // only working under objects and this is not work under function
    console.log(this)
}
chai()