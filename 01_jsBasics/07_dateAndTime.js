let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2024, 0, 12)
// let myCreatedDate = new Date(2024, 0, 12, 5, 3)
let myCreatedDate = new Date("2024-05-28")
console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp)
console.log(myCreatedDate.getTime())