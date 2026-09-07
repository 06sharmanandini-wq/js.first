let score = "vani"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN
// true => 1; false => 0
// null => 0
// undefined => undefined

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// 2 => true
// "" => false
// "mika" => true 

let someNumber = 44

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

/***************************** Operations ************************ */

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 4);
// console.log(2%3);

let str1 = "hello"
let str2 = " mahesh"
let str3 = str1 + str2
// console.log(str3);

// console.log(1 + 2); // return 3
// console.log("1" + "2"); // return 12
// console.log("1" + 2); // return 12
// console.log(1 + "2"); // return 12
// console.log("1" + 2 + 2); // return 122 (bcoz of string)
// console.log(1 + 2 + "2"); // return 32 (ECMA script guideline inside ToPrimitive)

// console.log( 3+ 4 * 5 % 3); // bad code writing use more parenthesis

/***************************Tricy (special) conversion **************************************/
// console.log(+true); // cause true is boolean value and it is 1 so if it has increment then it will return value 1
// cosnole.log(true+); // shows syntax error
// console.log(+""); // return 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 
let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// link to study
// https;//tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion