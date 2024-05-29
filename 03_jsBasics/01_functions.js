

function sayMyName(){
    console.log("D")
    console.log("U")
    console.log("R")
    console.log("G")
    console.log("E")
    console.log("S")
    console.log("H")
}
// sayMyName()

function addNumb(num1, num2){
    console.log(num1+num2)
}
addNumb(3,4)


function addNumb2(num1, num2){
    console.log(num1+num2)
}

let result = addNumb2(3,2)
// console.log(result)




function loginUserMsg(username){
    if(!username){
       return console.log("Please enter a user..")
    }
    return `${username}, loggedIn Successfully.`
}
// console.log(loginUserMsg())


function addCartPrice(...num){
    return num
}
console.log(addCartPrice(200, 300, 400))


function calculateCartPrice(num1, num2, ...num){
    return num
}
console.log(calculateCartPrice(200, 300, 400, 329, 33, 213))


let user = {
    userName: "durgesh3s",
    userEmail: "durgesh@gmail.com"
}

function handleObject(objectHandles){
    console.log(`User name is ${objectHandles.userName} and user's email is ${objectHandles.userEmail} `)
}
handleObject(user)