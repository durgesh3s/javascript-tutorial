// Object Literals
const mySym = Symbol("Key1")
const jsUser = {
    name: "Durgesh",
    [mySym]: "MyKey1",
    email: "durgesh.inernship@gmail.com",
    age: 21,
    location: "Lucknow",
    isLoggedIn: false
}

/*
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(typeof jsUser[mySym])
*/

jsUser.email = "durgesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "durgesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS Developer!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS Developer ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())