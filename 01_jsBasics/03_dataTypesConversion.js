let stringToNumber = "33abc"
stringToNumber = Number(stringToNumber)
console.log(typeof stringToNumber)
console.log(stringToNumber)

/*
"33" = 33
"33abc" = NaN -> (Not a Number)
*/


let numberAndStringToBoolean = 1
numberAndStringToBoolean = Boolean(numberAndStringToBoolean)
console.log(numberAndStringToBoolean)
console.log(typeof numberAndStringToBoolean);

/*
"abc" = true
" " = false

1 = true
0 = false

undefined value = false
*/

let numberToString = 33
numberToString = String(numberToString)
console.log(numberToString)
console.log(typeof numberToString);