let stringToNumber = "33abc"
stringToNumber = Number(stringToNumber)
console.log(typeof stringToNumber)
console.log(stringToNumber)

// "33" = 33
// "33abc" = NaN -> (Not a Number)


let numberAndStringToBoolean = 1
numberAndStringToBoolean = Boolean(numberAndStringToBoolean)
console.log(numberAndStringToBoolean)
console.log(typeof numberAndStringToBoolean);

// "abc" = true
// " " = false

// 1 = true
// 0 = false

// undefined value = false

let numberToString = 33
numberToString = String(numberToString)
console.log(numberToString)
console.log(typeof numberToString);



/* ++++++++++++++++++++++++++++++ Operators +++++++++++++++++++++++++++++++++++++ */
let value = 3
value = -value
console.log(value)

// Arithmetic Operators 
console.log(2+2);
console.log(2-1);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let i = 2;
console.log(++i);
console.log(i++); 
console.log(--i);
console.log(i--);

// Assignment Operator
let assign = 3
let a = assign

let b = 2
b += a

let c = 2
c *= a

let d = 2
d -= a

let e = 2
e **= a

let f = 2
f /= a


console.table([a,b,c,d,e,f])

// Comparision Operator
// let a = null
// let b = 0

console.log(a > b)
console.log(a < b)
console.log(a >= b) // Return True
console.log(a <= b) // Return True
console.log(a == b)
console.log(a === b)
console.log(a != b) 
console.log(a !== b)




console.log(+true) // Return 1
console.log(-true) // Return -1
console.log(true)  // Return true




let gameCounter = 100
gameCounter++
console.log(gameCounter)



console.log("2" > 1) // Return True 
console.log("02" > 1) // Return True


console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)
console.log(undefined == 0)