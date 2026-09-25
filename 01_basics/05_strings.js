const name = "jignesh"
const repoCount = 40
console.log(name + repoCount + " 40");

console.log(`I am ${name} and my repoCount is ${repoCount}`);

const gameName = new String("jignesh-Mario-ping")

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toWellFormed());
console.log(gameName.trim());
console.log(gameName.startsWith());
console.log(gameName.strike());
console.log(gameName.trimEnd(3, 0));
console.log(gameName.charAt(4));
console.log(gameName.italics());
console.log(gameName.__proto__);
console.log(gameName[7]);
console.log(gameName.length);

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "      jignesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jignesh.com/jignesh%20gada"

console.log(url.replace('%20', '-'));
console.log(url.replace('.com', '@com'));
console.log(url.includes('jignesh'));
console.log(url.includes('sundarlal'));

console.log(gameName.split('-'));