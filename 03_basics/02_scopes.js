// var c = 300
let a = 200                                            // global scope
if(true) {
   let a = 10
   const b = 20
   console.log("INNER: ", a);                        // block scope
}                                                    //{} comes with function and method then it is called scope

console.log(a);
// console.log(b);
// console.log(c);

// global scope is different in inspect console and codespace 