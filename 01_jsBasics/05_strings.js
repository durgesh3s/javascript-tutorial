let firstName = "Durgesh"
let lastName = ' Singh'
let fullNames = new String("Durgesh Singh")

//Concatination
console.log(fullNames)
console.log("FullName: " + firstName + lastName) // String concatination using '+' sign
console.log(firstName,lastName) // String concatination using ',' sign
console.log(firstName.concat(lastName)) // String concationation using '.concat()' method
console.log(`users firstName is: ${firstName} and last name is ${lastName} and full name is ${firstName + lastName}`) // String interpolation

// String length and indexes
let email = "durgesh.inernship@gmail.com"
console.log(email.length)
console.log(email.charAt(4))
console.log(email.indexOf("g"))

// String white space remover
let userName = "   durgesh3s"
console.log(userName)
console.log(userName.trim())


// String splitter using specific keywords
let url = "www.google.com"
console.log(url.split("."))


let userNames = "durgeshsingh"
// Substring in string treates '-ve' as starting index '0'.
console.log(userNames.substring(0,4))
// slice in string use '-ve' values to reverse the string.
console.log(userNames.slice(-11,4))
