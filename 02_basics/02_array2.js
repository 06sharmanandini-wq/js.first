const marvel_heros = ["iron man", "spider man", "thor", "loki"]
const dc_heros = ["wonder woman", "batman", "superman", "flask"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const another_array = [1, 2, 3, 4, [5, 6, 7], 9 ,[4, 6, [2, 3]]]
const real_another_array = another_array.flat(Infinity);              // falt - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);



console.log(Array.isArray("Hippo"));               // Asking array is the value is array 
// console.log(Array.isArray(1));
// console.log(Array.isArray("25"));
// console.log(Array.isArray());
console.log(Array.from("Elephant"));             // converting into array can convert anything object , string anything into array


console.log(Array.from({name: "Pinikiyo"}));    // output = [] (empty array), interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));