// let myName = "Amit"

// console.log(myName.trueLength)



// let myHeros = ["thor","spiderman"]
// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getSpiderPower : function(){
//         console.log(`Spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`Amit is present in all objects`)
// }
// heroPower.amit()

const User ={
    name :"username",
    email:"amit@gmail.com"
}

const Teacher ={
    makeVideo : true 
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "AJ"
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)

}
anotherUsername.trueLength()