//Declaration of number
let numb = 333
let num = new Number(332)
console.log(numb) // Output --> 333
console.log(num) // Output --> [Number: 333]

// Number to String Conversion
console.log(num.toString().length) // Output --> 3
console.log(numb.toFixed(2)) // Output --> 333.00

// Precision of number
let newNumb = 239.8696 
console.log(newNumb.toPrecision(5)) // Output --> 239.86

// Converted to indian counting method
let price = 1000000
console.log(price.toLocaleString('en-IN')) // Output --> 10,00,000

/* ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++*/

console.log(Math) // Output --> Object [Math] {}

console.log(Math.abs(-4)) // Output --> 4
console.log(Math.abs(4)) // Output --> 4


console.log(Math.round(4.6)) // Output --> 4
console.log(Math.ceil(4.6)) // Output --> 5
console.log(Math.floor(4.6)) // Output --> 4
console.log(Math.min(4,1,3,6)) // Output --> 1
console.log(Math.max(4,1,3,6)) // Output --> 6


const min = 10
console.log(Math.floor(Math.random() * (min + 1))) // Range form 0 to 10
