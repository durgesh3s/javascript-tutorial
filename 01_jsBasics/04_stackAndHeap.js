/*++++++++++++++Stack{Premitive DataTypes}+++++++++++++Heap{Non-Premitive DataTypes}+++++++++++*/

// Stack Memory {Premitive DataTypes:--> Number, Boolean, String, BigInt, Null, Undefined, Symbol}
let userName = "durgesh3s"
let realName = userName

console.log(userName)
console.log(realName)

realName = "Durgesh Singh"

console.log(userName)
console.log(realName)


// Heap Memory {Non-Premitive DataTypes:--> Arrays, Objects, Functions}
let userOne = {
    email: "durgesh@gmail.com",
    upi: "user.ybl"
}

let userTwo = userOne

userTwo.email = "durgesh.internship@gmail.com"

console.log(userOne) //Return Updated email: --> durgesh.internship@gmail.com
console.log(userTwo) //Return Updated email: --> durgesh.internship@gmail.com