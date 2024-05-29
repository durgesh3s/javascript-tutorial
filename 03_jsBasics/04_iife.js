
//
(function one(){
    console.log(`DB CONNECTED`)
})();


//
( () => {
    console.log(`DB CONNECTED TWO`)
})();


//
( (name) => {
    console.log(`DB CONNECTED AT ${name}`)
})("LOCAL-HOST");