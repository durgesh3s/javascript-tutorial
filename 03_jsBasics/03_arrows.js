const user = {
    name: "Durgesh",
    email: "durgesh@gmail.com",
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to our website...`)
    }
}
user.welcomeMsg()
user.name = "Deval"
user.welcomeMsg()
console.log(this)


function one(){
    let userName = "Durgesh"
    // console.log(`${this.userName}, welcome!`)
    console.log(`${userName}, welcome!`)
}
one()

let res = () => {
    let userName = "Durgesh"
    // console.log(`${this.userName}, welcome!`)
    console.log(`${userName}, welcome!`)
}
res()



/*
let sum = (num1, num2) => {
    return num1+num2
}
console.log(sum(3,5))


let sum = (num1, num2) => num1 + num2
console.log(sum(3,5))

let sum = (num1, num2) => (num1 + num2)
console.log(sum(3,5))
*/


