const userId = 1234
let userEmail = "durgesh.internship@gmail.com"
var userPassword = 12345
userCity = "Gorakhpur"
let userState


// userId = 3333  --> we can not re-assign the const variable value;

/*
Not prefer to use var in development phase,
because of issue in block and functional scope...
*/

userEmail = "durgesh.singh@gmail.com"
userPassword = 11223
userCity = "Lucknow"

console.table([userEmail, userPassword, userCity, userState])

