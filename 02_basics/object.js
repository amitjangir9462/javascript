

let mySml = Symbol("Key1")
const Objects = {
    name : "AMit",
    "Full Name": "Amit Jangir",
    [mySml]:"hello",
    age: 20,
    Location : "Jaipur",
    isLoggedIn : false
}
// console.log(Objects)

// console.log(Objects["Full Name"])


// Object.freeze(Objects.age)
// console.log(Objects.age)
// Objects.age = 30

// console.log(Objects.age)
// Objects.greeting = function(){
//     console.log("hii i am Amit")
// }


// Objects.greetingTwo = function(){
//     console.log(`hi i am ${this.name}`)
// }

// // console.log(Object.greeting())
// console.log(Objects.greetingTwo())