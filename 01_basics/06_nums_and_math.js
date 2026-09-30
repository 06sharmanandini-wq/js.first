// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 3223.8966

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-67));
// console.log(Math.round(6.3));
// console.log(Math.round(6.7));
// console.log(Math.ceil(6.2)); // round up the value
// console.log(Math.floor(6.9)); // round down the value
// console.log(Math.min(3, 4, 1, 0)); 
// console.log(Math.max(3, 4, 1, 0)); 



console.log(Math.random());          // always give values under 0 and 1
console.log(Math.random()*10);
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*10) + 1);   // to avoid getting the output 0 from this method it should be add 1 

const min = 5
const max = 16
console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
