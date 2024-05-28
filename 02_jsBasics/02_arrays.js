const marvel_heros = ["Spiderman", "Ironman", "Thor"]
const dc_heros = ["Batman", "Superman", "Joker"]

// This is the wrong way to concatinate the two arrays
marvel_heros.push(dc_heros)
console.log(marvel_heros)

// This is one of the way to concatinate the two arrays
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// This is known as Spread operator for concatinating two arrays
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// Merging all data into one arrays
let another_array = [1,2,3,[2,3,4],[3,4,5]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// This is the way to check that it's an Array for not... Returns Boolean Value
console.log(Array.isArray(dc_heros))
console.log(Array.isArray("Durgesh"))

// this is used for saperating the value of Strings into an Array
console.log(Array.from("Durgesh"))
console.log(Array.from({name: "Durgesh"}))

// this is used for adding all variables value in an arrays
let score_1 = 200
let score_2 = 202
let score_3 = 333
console.log(Array.of(score_1, score_2, score_3))