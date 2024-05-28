let array_1 = [1, 2, 3, 4, 5] // Initialization of array with elements 
let array_2 = ["Durgesh", "Deval", 1, false] // Initialization of array with different-different dataTypes
let arr1 = new Array(3) // Used to declare the size of the arrays
let array_3 = new Array(1, 2, 4, 6, 9) // Arrays declaration with some elements 
console.log(array_1[3])

// Methods of array
array_1.push(1) // Insert the value at the last index of the arrays
array_1.pop() // Remove the value from the last index of the arrays
array_1.unshift(2) // add the value at the '0th' index of the arrays
array_1.unshift(3) // add the value at the '0th' index of the arrays
array_1.shift() // Remove the value from the last index of the arrays
console.log(array_1) 

console.log(array_1.indexOf(3)) // Return the value which is present at the index '3'
console.log(array_1.includes(9)) // Return boolean value after maching the value(9) in the array
console.log(array_1.includes(3))  // Return boolean value after maching the value(3) in the array

let newArray = array_1.join() 
console.log(array_1) // output --> [1, 2, 3, 4, 5]
console.log(newArray) // output -->  1, 2, 3, 4, 5
console.log(typeof newArray) // output --> String

// Slice and Spice in Array
console.log("A", array_1) // Original array


// In slice() method it do not remove the value form the refrenced value of the array
let myArr_1 = array_1.slice(1,3) 
console.log( myArr_1) // Output --> [2, 3]
console.log("B", array_1) // Output --> [1, 2, 3, 4, 5]

// In splice() method it do remove the value form the refrenced value of the array
let myArr_2 = array_1.splice(1,3)
console.log(myArr_2) // Output --> [2, 3, 4]
console.log("C", array_1) // Output --> [1, 2, 3, 4, 5]
