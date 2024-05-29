
let tinder = {}
tinder.id = "durgesh3s"
tinder.name = "Durgesh"
tinder.isLoggedIn = false
// console.log(tinder)

let developer = {
    email: "durgesh@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Durgesh",
            lastName: "Singh"
        }
    }
}
// console.log(developer.fullName.userFullName.firstName)

let obj1 = {
    1: "a",
    2: "b"
}

let obj2 = {
    3: "a",
    4: "b"
}

// let obj3 = {obj1, obj2}
// let obj3 = Object.assign({}, obj1, obj2)
// let obj3 = {...obj1, ...obj2}
// console.log(obj3)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty("isLoggedIn"))