// array
// () - parenthesis, [] - brackets or square brckets, {} - braces, curly bracekts
// Array is always written in brackets []

const myArr = [0, 1, 2, 3, 4, 5, true, "jignesh"]

const Heroes = ["shaktiman", "yooman"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[3]);

//******************************** Array Method ********************************/ 


// myArr.push(6)                    ** push method adds the more elements in array
// myArr.push(8)
// myArr.push("metha")
// myArr.push("ice cream")
// myArr.push(false)
// console.log(myArr);


// myArr.pop()              //  Remove the element from last in array
// myArr.pop()
// myArr.pop()
// myArr.pop()
// myArr.pop()
// console.log(myArr);

// myArr.unshift(10)          // basically adds the element from starting in array not ideal method for big projects can crash computer
// myArr.shift()           // same as pop not need a value...basically remove the first element from array

//console.log(myArr.includes(6))     // so basically its like you are asking js if this value exist in array or not and it give back answer in boolean value
//console.log(myArr.indexOf(12))      // tells u on which position element is in array
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);     // will c0onvert the array into string
// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2); 