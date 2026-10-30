// var c = 300
let a = 200                                            // global scope
if(true) {
   let a = 10
   const b = 20
   // console.log("INNER: ", a);                        // block scope
}                                                    //{} comes with function and method then it is called scope

// console.log(a);
// console.log(b);
// console.log(c);

// global scope is different in inspect console and codespace 

// NESTED SCOPE

function one() {
   const username = "yunjesh"

   function two() {
      const website = "youtube"
      console.log(username);
   }
   // console.log(website);
   // two()
}
// one()

if(true) {
   const username = "yunjesh"
   if(username === "yunjesh") {
      const website = " youtube"
      // console.log(username + website);
   }
   // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++ //

console.log(addone(3))
function addone(num) {                          // this is just a function
   return num + 1
}
// console.log(addone(5));


console.log(addTwo(8));
const addTwo = function(num) {                 // this is not only function but a expression
   return num + 2
}
// addTwo(5)
// console.log(addTwo(8));